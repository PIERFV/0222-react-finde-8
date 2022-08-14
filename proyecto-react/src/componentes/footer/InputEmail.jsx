import React from 'react'
import styled from '@emotion/styled'



function InputEmail(props){
    return (
        <>
        <Formulario className="input" type={props.tipo} name= {props.name} id={props.id} required />
        </>
    )
}

export default InputEmail


const Formulario = styled.input`
    margin-let: 1.5rem;
    max-width: 190px;
    height: 44px;
    background-color: #F1F1E6;
    border-radius: .5rem;
    padding: 0 2rem;
    border: 2px solid transparent;
    font-size: 1rem;
    transition: border-color .3s cubic-bezier(.25,.01,.25,1) 0s, color 
                .3s cubic-bezier(.25,.01,.25,1) 0s,background 
                .2s cubic-bezier(.25,.01,.25,1) 0s;

:hover, :focus{
    outline: none;
    border-color: #05060f;
        }

:focus {
    color: #05060fc2;
}


`