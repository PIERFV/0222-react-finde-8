import './App.css';
import Armazon from "./componentes/Armazon"
import  CarouselFadeExample from './componentes/Carrusel';
import Card from './componentes/Card';
import Navbar from './componentes/navbar/Navbar';
import PieDePag from './componentes/footer/Footer';
import React, { useState } from 'react';
import Cart from "./componentes/carrito"

function App() {

  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);
  
  const handleChange = (item, d) => {
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].amount += d;

    

    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr]);
  };

  const handleCart = (item) => {
    if (cart.indexOf(item) !== -1) return;
    setCart([...cart, item]);
    
  };


  

  return (
  
    <>
   
      <Navbar size={cart.length}   setShow={setShow}/>
    {show ? (
      <>
        <div className='item'>
        < CarouselFadeExample/>
        </div>
        <Armazon handleCart={handleCart}/>
        </>
      ) : (
        <Cart cart={cart} setCart={setCart} handleChange={handleChange}     />
      )}
        
        
        
       
    <PieDePag/>
    
    
    </>
    
  );
}

export default App;


