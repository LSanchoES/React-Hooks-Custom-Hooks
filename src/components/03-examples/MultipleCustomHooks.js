import React from 'react'
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';
import '../02-useEffect/effects.css';


export const MultipleCustomHooks = () => {

    const {counter, increment} = useCounter(1);


    const {loading, data} = useFetch(`https://www.breakingbadapi.com/api/quotes/${ counter }`)
    //console.log(state);

    const {author, quote } = !!data && data[0]; //Si hay data entonces retorna data 1
    //se niega dos veces data para que null se convierta en false (solo negandolo una vez es true)

    return (
        <div>
            <h1>BreakingBad Quotes</h1>
            <hr></hr>

            {
                loading ? ( 
                    <div className="alert alert-info text-center">

                    Loading....
                    </div>
                )
                :
                (
                    <blockquote className="blockquote text-end">
                    <p className="mb-4">{quote}</p>
                    <footer className="blockquote-footer">{author}</footer>
                    </blockquote>
                )
            }

            <button className="btn btn-primary"
                    onClick={ increment }>
                Siguiente quote
            </button>

        </div>

    )
}
