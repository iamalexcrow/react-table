import React from 'react';
import { useTableContext } from '../context/context';
import styled from 'styled-components';

const UserPage = () => {
    const { user } = useTableContext();
    return (
        <Wrapper>
            <h2> more details </h2>
            <div>Chosen users: <b>{user.firstName}</b></div>
            <Text>
                <div>Description:</div>
                <Textarea value={user.description}/>
            </Text>
            
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
h2 {
    text-transform: uppercase;
    letter-spacing: 2px;
}

`

const Textarea = styled.textarea`
width: 200px;
height: 200px;
resize: none;
border: 1px transparent grey;
`

const Text = styled.div`
`