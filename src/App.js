import logo from './logo.svg';
import './App.css';
import React, { useEffect, useMemo, useRef } from 'react';
import * as axios from 'axios';
import { useTableContext } from './context/context';
import Table from "./components/Table";
import StartWindow from './components/StartWindow';
import Loader from './components/Loader';
import UserPage from './components/UserPage';
import styled from 'styled-components';

function App() {

  const { getItems, data, columns, url, user } = useTableContext();

  useEffect(() => {
    if (url === '') {
      return
    } else {
      (async () => {
        console.log('goes')
        const result = await axios(url);
        await getItems(result.data);
      })()
    }
  }, [url]);

  if (url === '') {
    return (
        <StartWindow />
    )
  }

  if (data.length === 0) {
    return (
        <Loader />
    )
  }

  return (
    <Wrapper>
      <Table columns={columns} data={data} />
      {user && <UserPage/>}
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
margin: 0;
padding:0;

// width: 100vw;
// height: 100vh;

// width: auto
// height: auto;

width: 100%;
height: 100%;

// overflow-x: hidden;

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`