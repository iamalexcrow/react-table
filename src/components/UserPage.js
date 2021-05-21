import React from 'react';
import { useTableContext } from '../context/context';
import styled from 'styled-components';

const UserPage = () => {
    const { user, closeWindow } = useTableContext();
    return (
        <Wrapper>
            <Close onClick={()=>closeWindow()}>&#x274C;</Close>
            <h2> more details </h2>
            <div>Chosen user: <b>{user.firstName}</b></div>
            <div>
                <div>Description:</div>
                <Textarea  readOnly value={user.description}/>
            </div>
            
            <div>Address: <b>{user.address.streetAddress}</b></div>
            <div>City: <b>{user.address.city}</b></div>
            <div>State: <b>{user.address.state}</b></div>
            <div>ZIP code: <b>{user.address.zip}</b></div>
        </Wrapper>
    )
}

export default UserPage;


const Wrapper = styled.div`
width: 350px;
display: flex;
margin: 20px;
padding: 20px;
background: white;
flex-direction: column;
position: relative;
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
h2 {
    text-transform: uppercase;
    letter-spacing: 2px;
}
`

const Close = styled.div`
position: absolute;
top: 20px;
right: 20px;
cursor: pointer;
`
const Textarea = styled.textarea`
width: 200px;
height: 200px;
resize: none;
border: 1px transparent grey;
`