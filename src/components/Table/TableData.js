import React from 'react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const TableData = ({getTableProps, headerGroups, getTableBodyProps, page, prepareRow, getMoreInfo}) => {
    return (
        <TableContainer component={Paper}>
            <Table aria-label="simple table"{...getTableProps()}>
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
                                    return <TableCell style={{ cursor: 'pointer' }}{...cell.getCellProps()}>{cell.render("Cell")}</TableCell>;
                                })}
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default TableData;