import React from 'react';
import { useTableContext } from '../context/context';

const SearchBar = ()=> {
    const { GlobalFilter, isFormOpen, setIsFormOpen, getMoreInfo } = useTableContext();
    return (
        <>
        <GlobalFilter
                preGlobalFilteredRows={preGlobalFilteredRows}
                globalFilter={globalFilter}
                setGlobalFilter={setGlobalFilter}
            />
            <button onClick={() => setIsFormOpen(true)}>Add a Hacked user</button>
            {isFormOpen && <AddForm />}
        </>
    )
}