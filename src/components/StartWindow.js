import React from 'react';
import { useTableContext } from '../context/context';

const StartWindow = () => {
    const {chooseUrl} = useTableContext();
    return (
        <div>
            <h1>
                Let's hack facebook!
            </h1>
            <h2>How many users do you want to hack today?</h2>
            <div>
                <button onClick={()=>chooseUrl(32)}>Hack a few!</button>
                <button onClick={()=>chooseUrl(1000)}>Hack a lot!</button>
            </div>
        </div>
    )
}
export default StartWindow;