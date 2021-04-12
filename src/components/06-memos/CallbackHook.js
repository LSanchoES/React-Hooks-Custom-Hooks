import React, { useCallback, useEffect, useState } from 'react';
import '../02-useEffect/effects.css';
import { ShowIncremet } from './ShowIncremet';

export const CallbackHook = () => {


    const [counter, setCounter] = useState(10);

    // const increment = () => {
    //     setCounter( counter + 1);
    // }
    
    const increment = useCallback(
        (num) => {
            setCounter( c => c + num);
        },
        [setCounter],
    );

    useEffect(() => {
        //Asi este efecto no se dispararia cada renderización! Por el useCallback
    }, [increment])



    return (
        <div>
            <h1>useCallback Hook: { counter }</h1>
            <hr></hr>

            <ShowIncremet increment={ increment }/>

        </div>
    )
}
