import React, { useState, useContext, useReducer, useMemo } from 'react';
import reducer from '../reducer/reducer';
import {
    ADD_ITEM,
    GRAB_DATA,
    CHOOSE_URL,
    SHOW_MORE,
    CLOSE_WINDOW
} from '../reducer/actions';

const initialState = {
    data: [],
    url: '',
    user: ''
}

const TableContext = React.createContext()

export const TableProvider = ({ children }) => {
    // context 
    const [state, dispatch] = useReducer(reducer, initialState);
    const [isFormOpen, setIsFormOpen] = useState(false);
    // function for opening and closing the add a new user form
    const triggerForm = () => (isFormOpen) ? setIsFormOpen(false) : setIsFormOpen(true);
    // columns object needed for React table 
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

    //different actions
    const getItems = (items) => {
        dispatch({ type: GRAB_DATA, payload: items })
    }
    const addItem = (newItem) => {
        dispatch({ type: ADD_ITEM, payload: { newItem } })
    }
    const chooseUrl = (amount) => {
        dispatch({ type: CHOOSE_URL, payload: { amount } })
    }
    const getMoreInfo = (id) => {
        dispatch({ type: SHOW_MORE, payload: { id } })
    }
    const closeWindow = () => {
        dispatch({ type: CLOSE_WINDOW })
    }

    return <TableContext.Provider value={{ ...state, columns, addItem, isFormOpen, setIsFormOpen, getItems, chooseUrl, getMoreInfo, closeWindow, triggerForm }}>{children}</TableContext.Provider>
}
export const useTableContext = () => {
    return useContext(TableContext);
}