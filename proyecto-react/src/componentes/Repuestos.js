import React from "react";
import '../estilos/Repuestos.css';

function Repuestos(props) {
  return(
    <div className="contenedor-repuestos">
      <img 
        className="contenedor-imagen"
        src={require(`../imagenes/${props.imagen}.jpg`)}
        alt="" />
      <div className="contenedor-texto">
        <p className="nombre-repuesto">
          {props.repuesto} 
        </p>
        <p className="descripcion">
          {props.descripcion}
        </p>
      </div>
    </div>
  );
}

export default Repuestos; 