import './App.css';
import  CarouselFadeExample from './componentes/Carrusel';
import Card from './componentes/Card';
import Navbar from './componentes/navbar/Navbar';
import PieDePag from './componentes/footer/Footer';
import React, { useState } from 'react';


function App() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    //cuando esta true lo pasa a false y vice versa
    setCount(count + 1)
  }
  return (
  
    <>
    <Navbar count={count}/>
    <div className='item'>
    < CarouselFadeExample/>
    </div>
    <div className="contenedor_card_general">
      <div className='fijo'>
              <Card
            card_imagen = 'cubrealfombra'
            titulo_card = 'Cubre Alfombra'
            texto_card = 'Cubre alfombra de goma Vapren para habitáculo Audi A3'
            precio_card= '500.23'
            handleClick={handleClick}
        />
      </div>

          <Card
          card_imagen = 'depositorefrigerante'
          titulo_card = 'Deposito Refrigerante'
          texto_card = 'Deposito recuperador agua con tapa para Ford Ka'
          precio_card= '899,99'
          handleClick={handleClick}
          />
          
          <div className='fijo'>
            <Card
                    card_imagen = 'filtroaceite'
                    titulo_card = 'Filtro de Aceite Vw'
                    texto_card = 'Filtro de aceite original Volkswagen 3.0 v6'
                    precio_card= '23,78'
                    handleClick={handleClick}
                    />
          </div>
          <div className='fijo' >
                      <Card
                    card_imagen = 'retrovisor'
                    titulo_card = 'Retrovisor para golf'
                    texto_card = 'Retrovisor original Volkswagen 3.0 v6'
                    precio_card= '1.123,78'
                    handleClick={handleClick}
                    />
          </div>
          <div className='fijo'><Card
                    card_imagen = 'pistones'
                    titulo_card = 'Pistones Originales'
                    texto_card = 'pistones originales para toyota'
                    precio_card= '999,78'
                    handleClick={handleClick}
                /></div>
            <div className='fijo'>
            <Card
                      card_imagen = 'pirelli'
                      titulo_card = 'cubiertas 150'
                      texto_card = 'cubiertas pirelli  90 90 100 pista  sin camara '
                      precio_card= '2.333,78'
                      handleClick={handleClick}

                      />
            </div>
            <div className='fijo' >
            <Card
                      card_imagen = 'cubiertaEnduro'
                      titulo_card = 'cubiertas traseras '
                      texto_card = 'cuebiertas para motos enduro 150 '
                      precio_card= '9.323,78'
                      handleClick={handleClick}

                      />
            </div>
            <div className='fijo' >
                      <Card
                      card_imagen = 'cubiertasJuego'
                      titulo_card = 'juego de cubiertas Enduro'
                      texto_card = 'juego de cubiertas pirelli para motos enduro trasera  90 120 120   delantera 90 100 100'
                      precio_card= '15.586,08'
                      handleClick={handleClick}

                      />
            </div>
            <div className='fijo' >
            <Card
                      card_imagen = 'aceiteParaAuto'
                      titulo_card = 'aceite para autos Mobil'
                      texto_card = 'aceite semi-simtetico 30/50'
                      precio_card= '684,87'
                      handleClick={handleClick}
                      />
            </div>

          
    </div>
    <PieDePag/>
    </>
    
  );
}

export default App;


