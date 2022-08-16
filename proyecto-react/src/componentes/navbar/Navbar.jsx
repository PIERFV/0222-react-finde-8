import React, { useState } from 'react'
import styled from '@emotion/styled'
import BurguerButton from './BurguerButton'


 function Navbar(){ 
    //se usa el metodo useState para actualizar el componente burguerbutton
    const [clicked, setClicked] = useState(false)
    const handleClick = () => {
      //cuando esta true lo pasa a false y vice versa
    setClicked(!clicked)
    }
    return(
      //handleClick en los links hace que cuando se haga click cierre el nav 
      // comparacion con un ternario  ? : 
      <>
        <NavContainer>
            <h2>Logo</h2>
            <div  className={`links ${clicked ? 'active' : ''}`}>
                <a  onClick={handleClick} href="#">inicio</a>
                <a  onClick={handleClick} hhref="#">productos</a>
                <a  onClick={handleClick} hhref="#">Nosotros !!</a>
            </div>
            <div className='burguer'>
                <BurguerButton clicked={clicked} handleClick={handleClick} />
            </div>
            
        </NavContainer>
        </>
    )
    }

export default Navbar
//estilos componentes
const NavContainer = styled.nav`
  h2{
    color: white;
    font-weight: 400;
    span{
      font-weight: bold;
    }
  }
  padding: .4rem;
  background-color: #324A51;
  display: flex;
  align-items: center;
  justify-content: space-between;
  a{
    color: white;
    text-decoration: none;
    margin-right: 1rem;
  }
  .links{
    position: absolute;
    top: -700px; 
    right: 0;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    background-color:rgba( 50, 74 , 81, .1);
    transition: all .1s ease;

    a{
      visibility: hidden;
    }
    @media(min-width: 768px){
      position: initial;
      margin: 0;
      margin-left: 52rem;
      a{
        font-size: 1rem;
        color: #fff;
        display: inline;
        cursor: pointer;
        visibility: visible  ;
        
      }
      display: block;
    }
  }
  .links.active{
    height : 12vh;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    top: 11.5%;
    left: 0;
    right: 0;
    text-align: center;
    background-color:rgba( 50, 74 , 81, .7);
    border-radius: 0 0  70% 60%;
    transition: all .5s ease ;
    cursor : pointer;
    a{
      font-size: 1.5rem;
      margin-top: .3rem;
      color: #000;
      visibility: visible  ;
    }
  }
  .burguer{
    @media(min-width: 768px){
      visibility: hidden;
    }
  }`

  
  

