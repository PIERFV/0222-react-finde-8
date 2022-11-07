
import '../../src/App.css'
import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import styled from '@emotion/styled';


function CarouselFadeExample() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
  
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item >
        <img
              style={photo}
              className="d-block w-100"
              src={require('../imagenes/carusel1.png')}
              alt="First slide"
            />
          <Carousel.Caption>
          <h3 style={letra}>Repuestos de calidad </h3>
              <p style={letra}>los mejores repuestos garantia nacinal e internacinal</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={photo}
            className="d-block w-100"
            src={require('../imagenes/motoCaru.png')}
            alt="Second slide"
          />

          <Carousel.Caption>
          <h3> la mejor indumentaria  </h3>
              <p> Cascos , Guantes , Pecheras fox , camisas , chaquetas y mas...</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={photo}
            className="d-block w-100"
            src={require('../imagenes/carrusel3.png')}
            alt="Third slide"
          />

          <Carousel.Caption>
          <h3 style={letra1}> productos para el cuidado y mantenimiento</h3>
              <p style={letra1}>
                Marcas de calidad con productos reconocidos  a nivel nacional e internacional
              </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    
  );
}

export default CarouselFadeExample;

const photo = {
  objectFit: 'cover',
  width: '100%',
  height: '15rem'

}

const letra ={
  color: '#ff0303 '
}

const letra1={
  color: '#e9ff88',
  
}








