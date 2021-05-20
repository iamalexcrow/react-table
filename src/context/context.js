import React, { useState, useContext, useReducer, useMemo } from 'react';
import reducer from '../reducer/reducer';
import { useAsyncDebounce } from "react-table";
import {
    ADD_ITEM,
    GRAB_DATA,
    CHOOSE_URL,
    SHOW_MORE
} from '../actions';

const initialState = {
    data: [],
    url: '',
    user: ''
}

const TableContext = React.createContext()

export const TableProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState);
    const [isFormOpen, setIsFormOpen] = useState(false);

    const columns = useMemo(
        () => [
            {
                Header: "Id",
                accessor: "id"
            },
            {
                Header: "firstName",
                accessor: "firstName"
            },
            {
                Header: "lastName",
                accessor: "lastName"
            },
            {
                Header: "email",
                accessor: "email"
            },
            {
                Header: "phone",
                accessor: "phone"
            },
        ],
        []
    );

    //Global filter function
    function GlobalFilter({
        preGlobalFilteredRows,
        globalFilter,
        setGlobalFilter,
    }) {
        const count = preGlobalFilteredRows.length
        const [value, setValue] = React.useState(globalFilter)
        const onChange = useAsyncDebounce(value => {
            setGlobalFilter(value || undefined)
        }, 200)
        return (
            <span>
                Search:{' '}
                <input
                    value={value || ""}
                    onChange={e => {
                        setValue(e.target.value);
                        onChange(e.target.value);
                    }}
                    placeholder={`${count} records...`}
                    style={{
                        fontSize: '1.1rem',
                        border: '0',
                    }}
                />
            </span>
        )
    }

    //different actions
    const getItems = (items) => {
        dispatch({ type: GRAB_DATA, payload: items })
    }

    const addItem = (newItem) => {
        dispatch({ type: ADD_ITEM, payload: { newItem } })
    }
    // possibly useEffect for

    const chooseUrl = (amount) => {
        dispatch({ type: CHOOSE_URL, payload: { amount } })
    }

    const getMoreInfo = (id) => {
        dispatch({ type: SHOW_MORE, payload: { id } })
    }
    return <TableContext.Provider value={{ ...state, columns, addItem, isFormOpen, setIsFormOpen, GlobalFilter, getItems, chooseUrl, getMoreInfo }}>{children}</TableContext.Provider>
}
export const useTableContext = () => {
    return useContext(TableContext);
}