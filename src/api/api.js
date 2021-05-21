import React from 'react'
import * as axios from 'axios';

const getData = async (url, getItems) => {
    try {
        const result = await axios(url);
        getItems(result.data);
    } catch (e) {
        alert('Oopsies, something went wrong! Do not get upset and come back later. Here is the problem, if you interested:',e);
    }
}

export default getData;