import React from "react";
import '../estilos/Autos.css';

function Autos(props) {
  return(
    <div className="contenedor-autos">
      <img 
        className="contenedor-imagen"
        src={require(`../imagenes/${props.imagen}.jpg`)}
        alt="auto" />
      <div className="contenedor-texto">
        <p className="nombre-auto">
          {props.auto} - {props.modelo}
        </p>
        <p className="kilometraje">
          Tiene {props.kilometraje}
        </p>
        <p className="descripcion">
          {props.descripcion}
        </p>
      </div>
    </div>
  );
}

export default Autos; 