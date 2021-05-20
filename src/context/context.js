import React, { useState, useContext, useReducer, useMemo } from 'react';
import reducer from '../reducer/reducer';
import { useAsyncDebounce } from "react-table";
import styled, {css} from 'styled-components';
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
            <Wrapper>
                <h4>Search through :{' '}</h4>
                <SearchBar>
                <Input
                    value={value || ""}
                    onChange={e => {
                        setValue(e.target.value);
                        onChange(e.target.value);
                    }}
                    placeholder={`${count} hacked users...`}
                    style={{
                        fontSize: '1.1rem',
                        // border: '2px solid #4966aa',
                        // borderRadius: '20px',
                        // outline: none;
                    }}
                />
                <Button>SEARCH</Button>
                </SearchBar>
            </Wrapper>
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

const SearchBar =styled.div`
display:flex;`

const Input = styled.input`
    box-sizing: border-box;
    width: 100%;
    height: 50px;
    margin-right: 10px;
    border: 2px solid #010100;
    background: white;
    border-radius: 5px;
    outline: none;
    padding-left:15px;

    flex-grow:5;
    text-transform: uppercase;
    letter-spacing: 2px;

    ::placeholder {
        text-transform: uppercase;
        letter-spacing: 2px;
    }

`

const Wrapper = styled.div`
    width: 100%;
    min-width: 800px;
    margin: 0 0 0px 0;
    padding: 0;
    h4 {
        margin: 5px 0 5px 0;
        text-transform: uppercase;
        letter-spacing: 2px;
    }
`
const Button = styled.button`
    box-sizing: border-box;
    background: white;
    flex-shrink:3;
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-decoration: none;
    border: 2px solid #010100;
    padding: 15px;
    color: #000;
    text-transform: uppercase;
    letter-spacing: 2px;
    position: relative;
    display: inline-block;
    transition: 0.05s;
    margin: 0 0 10px 0;
    border-radius: 5px;
    ${props => props.disabled && css`
        border: 2px solid #c7c8ca;
        color: #c7c8ca;
  `}

    :hover {
        transition:0.05s;
        border: 2px solid #4966aa;
        color: #4966aa;
        ${props => props.disabled && css`
        border: 2px solid #c7c8ca;
        color: #c7c8ca;
  `}
    }
`