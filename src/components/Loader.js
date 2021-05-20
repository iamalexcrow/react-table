import React from 'react';
import img from '../pics/magnify.svg'
import styled from 'styled-components';

const Loader = ()=> {
    return (
        <Wrapper>
            <img src={img} alt="Loading..." />
            <h3>Actively Hacking...</h3>
        </Wrapper>
    )
}

export default Loader;

const Wrapper = styled.div`
width: 100vw;
height: 100vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
h3 {
    text-transform: uppercase;
    letter-spacing: 2px;
}`
