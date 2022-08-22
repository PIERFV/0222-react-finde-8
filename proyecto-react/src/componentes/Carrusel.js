import React from "react";


function Carrusel(props) {
  return(
    <div className="carrusel">
      <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={require(`../imagenes/${props.imagen}.png`)} class="d-block w-100" alt="foto 1"/>
          </div>
          <div class="carousel-item">
            <img src={require(`../imagenes/${props.imagen2}.png`)} class="d-block w-100" alt="foto 2"/>
          </div>
          <div class="carousel-item">
            <img src={require(`../imagenes/${props.imagen3}.png`)} class="d-block w-100" alt="foto 3"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carrusel; 