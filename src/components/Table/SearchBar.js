import React from 'react'
import styled, { css } from 'styled-components';
import { useAsyncDebounce } from "react-table";


export const SearchBar = ({ preGlobalFilteredRows, globalFilter, setGlobalFilter }) => {
    const count = preGlobalFilteredRows.length;
    const [value, setValue] = React.useState(globalFilter)
    const onChange = useAsyncDebounce(value => {
        setGlobalFilter(value || undefined)
    }, 200)

    if (value === '') {
        onChange(value);
    }
    return (
            <Wrapper>
                <h4>Search through :{' '}</h4>
                <Bar>
                    <Input
                        value={value || ""}
                        onChange={e => {
                            setValue(e.target.value);
                            //functionality for filtering onChange
                            // onChange(e.target.value);
                        }}
                        placeholder={`${count} hacked users...`}
                    />
                    <Button onClick={() => onChange(value)}>SEARCH</Button>
                </Bar>
            </Wrapper>
    )
}

//STYLED COMPONENTS
const Bar = styled.div`
    display:flex;
`

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
    `
}

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