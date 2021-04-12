import React, { useLayoutEffect, useRef, useState } from 'react'
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';
import './layout.css';


export const Layout = () => {

    const { counter, increment } = useCounter(1);
    const { data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`)

    const { quote } = !!data && data[0]; 

    const pTag = useRef();
    const [boxSize, setBoxSize] = useState({});
    //Sirve para ver que cambios han ocurrido al final de todas las manipulaciones del DOM
    useLayoutEffect(() => {

     setBoxSize(pTag.current.getBoundingClientRect() );
    }, [quote])


    return (
        <div>
            <h1>Layout Effect!</h1>
            <hr></hr>



            <blockquote className="blockquote text-end">
                <p className="mb-4" ref={pTag}>{quote}</p>
            </blockquote>


            <pre>
                {JSON.stringify(boxSize, null, 3)}
            </pre>


            <button className="btn btn-primary"
                onClick={increment}>
                Siguiente quote
            </button>

        </div>

    )
}
