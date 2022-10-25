import React from "react";
import styled from '@emotion/styled'

function Card (props) {
  return (
      <Cartas>
        <img className="card-img"
        src={require(`../imagenes/${props.card_imagen}.jpg`)}
        />
        <div className="card-info">
          <p className="text-title">{props.titulo_card}</p>
          <p className="text-body">{props.texto_card}</p>
        </div>
        <div class="card-footer">
        <span class="text-title">{props.precio_card}</span>
        <button name="compras"> Comprar </button>
        </div>
      </Cartas>
  )   
}



export default Card

const Cartas  = styled.div`

  width: 11rem;
  height: auto;
  padding: .8rem;
  background: #f5f5f5;
  position: relative;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  padding-bottom: 1rem;
  border-radius: 5% 5% 5% 5%;
  left: 1rem;



  .card-img {
    border: 1px solid #000;
    height: 40%;
    width: 100%;
    border-radius: .5rem;
    transition: .3s ease;
    object-fit:contain;
  }

  .card-img:hover {
    transform: translateY(-25%);
    box-shadow: rgba(226, 196, 63, 0.25) 0px 13px 47px -5px, rgba(180, 71, 71, 0.3) 0px 8px 16px -8px;
  }

  .text-title {
    font-weight: 900;
    font-size: 1.2em;
    line-height: 1.5;
  }
  .text-body {
    font-size: .9em;
    padding-bottom: 10px;
    overflow:hidden;
  }
  button {
    margin-top: .5rem;
    padding: 10px;
    font-size: 15px;
    outline: none;
    border: 2px solid black;
    background-color: white;
    color: white;
    position: relative;
    letter-spacing: 1px;
    border-radius: 15% 15% 15% 15%;
   }
   
   button::before {
    content: 'Comprar';
    /*Button's value/text-content */
    position: absolute;
    top: -14%;
    left: 7%;
    background-color: black;
    width: 100%;
    height: 100%;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.15s ease-in-out;
    font-weight: bold;
    border-radius: 15% 15% 15% 15%;
   }
   
   button:hover::before {
    top: 0;
    left: 0;
    border-radius: 15% 15% 15% 15%;
   }

`