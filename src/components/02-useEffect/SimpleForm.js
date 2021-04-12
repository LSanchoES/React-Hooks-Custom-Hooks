import React, { useEffect, useState } from 'react'
import './effects.css'
import { Message } from './Message'




export const SimpleForm = () => {


    const [formState, setFormState] = useState({
        name:'',
        email:''
    })

    const {name, email} = formState;


    useEffect(()=>{
        // console.log('hey!')
    }, [] )

    useEffect(()=>{
        // console.log('FormState cambio!!')
    }, [formState] ) 

    useEffect(()=>{
        // console.log('<Solo Cambia cuando cambia  el email! haha')
    }, [email] ) 


    const handleInputChange = ({target}) =>{

        setFormState({
            ...formState,
            [ target.name ] : target.value
        })

    }

    return (
        <>
          <h1>UseEffect</h1>  
          <hr></hr>

          <div className="form-group">
              <input type="text"
                    name="name"
                    className="form-control"
                    placeholder="Tu nombre"
                    autoComplete="off"
                    value={name}
                    onChange={ handleInputChange}
                >
                </input>
          </div>
          <div className="form-group">
              <input type="text"
                    name="email"
                    className="form-control"
                    placeholder="Tu email"
                    autoComplete="on"
                    value={email}
                    onChange={ handleInputChange}
                >
                </input>
          </div>
            <p><strong>Pon 123 en el nombre</strong></p>
            { (name==='123') && <Message />}

        </>
    )
}
