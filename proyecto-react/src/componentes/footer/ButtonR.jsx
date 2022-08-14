import React from 'react'
import styled from '@emotion/styled'


<button type="submit" id="09876" > enviar</button>


function Button(props) {
    return(
        <>
            <EnviarB >
                    <span className="button_top"  type = {props.tipo} id= {props.id}>ENVIAR </span>
            </EnviarB >
        </>
    )
}

export default Button

const EnviarB = styled.button`

font-size: 17px;
font-weight: bold;
border: none;
border-radius:0.75em ;
background: #000000 ;
height : 2.7rem;


.button_top {
    display: block;
    box-sizing: border-box;
    border: 2px solid #000000 ;
    border-radius: 0.75em;
    padding: 0.75em 1.5em;
    background:#e8e8e8;
    color:#000000 ;
    transform: translateY(-0.2em);
    transition: transform 0.1s ease;
    height : 2 rem;
   }

:hover .button_top {
    /*tira el boton ariba*/
   transform: translateY(-0.33em);
  }
  
:active .button_top {
    /* hace unefecto hacia bajo cuando se lo preciona*/
   transform: translateY(0);
  }
`