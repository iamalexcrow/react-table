import React from 'react';
import styled from 'styled-components';


const Paginator = ({canPreviousPage, gotoPage, previousPage, pageIndex, pageOptions, nextPage, canNextPage,pageSize, pageCount, setPageSize}) => {
    return (
        <Wrapper className="pagination">
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
    </Wrapper>
    )
}

export default Paginator;

const Wrapper = styled.div`
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
    background: white;
    cursor: pointer;
}
div {
    text-align: center;
    margin: auto;
    text-transform: uppercase;
    letter-spacing: 2px;
}
select {
    border: 2px solid #010100;
    border-radius: 2px;
    outline: none;
    text-transform: uppercase;
    letter-spacing: 2px;
    padding: 0 5px;
    cursor: pointer;
}
`