import React from 'react';
import { useFilters, useSortBy, useTable, useGlobalFilter, usePagination } from "react-table";
import { useTableContext } from '../context/context';
import AddForm from './AddForm';
import styled from 'styled-components';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';



export default function TableForm({ columns, data }) {
    const { GlobalFilter, isFormOpen, getMoreInfo, triggerForm } = useTableContext();
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
            <SearchBar>
                <GlobalFilter
                    preGlobalFilteredRows={preGlobalFilteredRows}
                    globalFilter={globalFilter}
                    setGlobalFilter={setGlobalFilter}
                />
            </SearchBar>
            <AddFields>
                <Button onClick={() => triggerForm()}>{!isFormOpen ? 'Add a Hacked user' : 'Close form'}</Button>
                {isFormOpen && <AddForm />}
            </AddFields>
            <Paginator className="pagination">
                <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
                    {'<<'}
                </button>{' '}
                <button onClick={() => previousPage()} disabled={!canPreviousPage}>
                    {'<'}
                </button>{' '}
                <div>
                    Page{' '}
                    <strong>
                        {pageIndex + 1} of {pageOptions.length}
                    </strong>{' '}
                </div>
                <button onClick={() => nextPage()} disabled={!canNextPage}>
                    {'>'}
                </button>{' '}
                <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
                    {'>>'}
                </button>{' '}
                <select
                    value={pageSize}
                    onChange={e => {
                        setPageSize(Number(e.target.value))
                    }}
                >
                    {[10, 20, 30, 40, 50].map(pageSize => (
                        <option key={pageSize} value={pageSize}>
                            Show {pageSize}
                        </option>
                    ))}
                </select>
            </Paginator>
            <TableContainer component={Paper}>
                <Table  aria-label="simple table"{...getTableProps()}>
                    <TableHead>
                        {headerGroups.map(headerGroup => (
                            <TableRow {...headerGroup.getHeaderGroupProps()}>
                                {headerGroup.headers.map(column => (
                                    <TableCell
                                        {...column.getHeaderProps(column.getSortByToggleProps())}
                                        className={
                                            column.isSorted
                                                ? column.isSortedDesc
                                                    ? "sort-desc"
                                                    : "sort-asc"
                                                : ""
                                        }
                                    >
                                        {column.render("Header")}
                                        <span>
                                            {column.isSorted
                                                ? column.isSortedDesc
                                                    ? "  🔽"
                                                    : "  🔼"
                                                : column.canSort
                                                    ? "  ⏺"
                                                    : ""}
                                        </span>
                                    </TableCell>
                                ))}
                            </TableRow>
                        ))}
                    </TableHead>
                    <TableBody {...getTableBodyProps()}>
                        {page.map((row, i) => {
                            prepareRow(row);
                            return (
                                <TableRow onClick={() => getMoreInfo(row.original.phone)}{...row.getRowProps()}>
                                    {row.cells.map(cell => {
                                        return <TableCell {...cell.getCellProps()}>{cell.render("Cell")}</TableCell>;
                                    })}
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </Wrapper>
    );
}

const SearchBar = styled.div`
display: flex;
justify-content: space-between;
span {
    input {
        width: 100%;
        height: 50px;
        border: 2px solid #010100;
        padding-left: 15px;
    }
}
`
const AddFields = styled.div`
`

const Wrapper = styled.div`
margin-top: 50px;
max-width: 900px;
height: auto;
bakground: white;
margin: 10px 0;
`

const Paginator = styled.div`
padding: 2px;
display: flex;
height: 30px;
justify-content: space-between;
button {
    border: 2px solid #010100;
    width: 30px;
    height: 30px;
    border-radius: 2px;
    color: #010100;
    margin: 0 1px 0 1px;
}
div {
    text-align: center;
    margin: auto;
}
select {
    border: 2px solid #010100;
    border-radius: 2px;
    outline: none;
}
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