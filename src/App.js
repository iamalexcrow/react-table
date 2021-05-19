import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState, useMemo} from 'react';
import * as axios from 'axios';
import { useTableContext } from './context/context';
import Table from "./Table";

function App() {

  const {getItems, data} = useTableContext()

  const url = 'http://www.filltext.com/?rows=1000&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&delay=3&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D'

  const columns = useMemo(
    () => [
      {
        Header: "Id",
        accessor: "id"
      },
      {
        Header: "firstName",
        accessor: "firstName"
      },
      {
        Header: "lastName",
        accessor: "lastName"
      },
      {
        Header: "email",
        accessor: "email"
      },
      {
        Header: "phone",
        accessor: "phone"
      },
    ],
    []
  );
  

  useEffect(() => {
    (async () => {
      const result = await axios(url);
      await getItems(result.data);
  })()
  }, []);

  // ahow initial window 
  // show spinner while data is fetching 

  return (
    <div>
      <Table columns={columns} data={data}/>
    </div>
  );
}

export default App;


