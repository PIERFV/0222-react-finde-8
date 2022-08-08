import React from "react";
import '../estilos/Card.css'

function Card (props) {
  return (
      <div class="contenedor_card">
        <img 
        className="imagen_card"
        src={require(`../imagenes/${props.card_imagen}.jpg`)}
        alt="" />
        <h3 className="titulo_card">
          {props.titulo_card}
        </h3>
        <p className="texto_card">
          {props.texto_card}
        </p>
      </div>
  )   
}

export default Card