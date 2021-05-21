import './App.css';
import React, { useEffect, useState } from 'react';

import { useTableContext } from './context/context';
import Table from "./components/Table/Table";
import StartWindow from './components/StartWindow';
import Loader from './components/Loader';
import UserPage from './components/UserPage';
import styled from 'styled-components';
import getData from './api/api';

function App() {
  const { getItems, data, columns, url, user } = useTableContext();
  useEffect(() => {
    if (url === '') {
      return
    } else {
        getData(url,getItems);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);

  // START WINDOW
  if (url === '') {
    return (
        <StartWindow />
    )
  }

  // SHOW A LOADER WHEN DATA IS FETCHING
  if (data.length === 0) {
    return (
        <Loader />
    )
  }

  // SHOW TABLE WITH USERS WHENFETCH IS DONE
  return (
    <Wrapper>
      <Table columns={columns} data={data} />
      {user && <UserPage/>}
    </Wrapper>
  );
}

export default App;

//STYLED COMPONENTS
const Wrapper = styled.div`
  margin: 0;
  padding:0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`