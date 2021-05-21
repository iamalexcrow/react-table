import React from 'react';
import { useFilters, useSortBy, useTable, useGlobalFilter, usePagination } from "react-table";
import { useTableContext } from '../../context/context';
import AddForm from './AddForm';
import styled from 'styled-components';
import { SearchBar } from './SearchBar';
import Paginator from './Paginator';
import TableData from './TableData'

export default function TableForm({ columns, data }) {
    const { isFormOpen, getMoreInfo, triggerForm } = useTableContext();
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        prepareRow,
        //filters
        preGlobalFilteredRows,
        setGlobalFilter,
        // pagination
        page,
        canPreviousPage,
        canNextPage,
        pageCount,
        gotoPage,
        nextPage,
        previousPage,
        pageOptions,
        setPageSize,
        state: { pageIndex, pageSize, globalFilter },
    } = useTable({
        columns,
        data,
        initialState: { pageIndex: 0, pageSize: 20 }
    },
        useFilters,
        useGlobalFilter,
        useSortBy,
        usePagination);
    return (
        <Wrapper>
            <SearchBar preGlobalFilteredRows={preGlobalFilteredRows} globalFilter={globalFilter} setGlobalFilter={setGlobalFilter} />
            <div>
                <Button onClick={() => triggerForm()}>{!isFormOpen ? 'Add a Hacked user' : 'Close form'}</Button>
                {isFormOpen && <AddForm />}
            </div>
            <Paginator canPreviousPage={canPreviousPage}
                gotoPage={gotoPage}
                previousPage={previousPage}
                pageIndex={pageIndex}
                pageOptions={pageOptions}
                nextPage={nextPage}
                canNextPage={canNextPage}
                pageSize={pageSize}
                pageCount={pageCount}
                setPageSize={setPageSize}
            />
            <TableData getTableProps={getTableProps}
                headerGroups={headerGroups}
                getTableBodyProps={getTableBodyProps}
                page={page}
                prepareRow={prepareRow}
                getMoreInfo={getMoreInfo}
            />
        </Wrapper>
    );
}

const Wrapper = styled.div`
    margin-top: 50px;
    max-width: 900px;
    height: auto;
    bakground: white;
    margin: 10px 0;
`
const Button = styled.button`
    background: white;
    box-sizing: border-box;
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
    margin-bottom: 10px;
    border-radius: 5px;
    :hover {
        transition:0.05s;
        border: 2px solid #4966aa;
        color: #4966aa;
    }
`