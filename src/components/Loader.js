import React from 'react';
import img from '../pics/magnify.svg'

const Loader = ()=> {
    return (
        <div>
            <img src={img} alt="Loading..." />
        </div>
    )
}

export default Loader;