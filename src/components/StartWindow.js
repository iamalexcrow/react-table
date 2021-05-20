import React from 'react';
import { useTableContext } from '../context/context';
import styled from 'styled-components';
const StartWindow = () => {
    const { chooseUrl } = useTableContext();
    return (
        <Wrapper>
            <div>
            <h1>
                Let's hack <span>facebook</span>!
            </h1>
            <h2>How many users do you want to hack today?</h2>
            <div>
                <Button variant="contained" color="primary" onClick={() => chooseUrl(32)}>Hack a few!</Button>
                <Button variant="contained" color="primary" onClick={() => chooseUrl(1000)}>Hack a lot!</Button>
            </div>
            </div>
        </Wrapper>
    )
}
export default StartWindow;

const Wrapper = styled.div`
width: 100vw;
height: 100vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
span {
    color: #4966aa;
    font-size: 50px;
}
`

const Button = styled.button`
    box-sizing: border-box;
    width: 150px;
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
    margin: 5px;
    transition: 0.05s;

    :hover {
        transition:0.05s;
        border: 2px solid #4966aa;
        color: #4966aa;
    }
`
