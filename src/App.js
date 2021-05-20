import logo from './logo.svg';
import './App.css';
import React, { useEffect, useMemo, useRef } from 'react';
import * as axios from 'axios';
import { useTableContext } from './context/context';
import Table from "./Table";
import StartWindow from './components/StartWindow';
import Loader from './components/Loader';
import UserPage from './components/UserPage';

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
  }, [url, getItems]);

  if (url === '') {
    return <StartWindow />
  }

  if (data.length === 0) {
    return (
      <Loader />
    )
  }

  return (
    <div>
      <Table columns={columns} data={data} />
      {user && <UserPage/>}
    </div>
  );
}

export default App;