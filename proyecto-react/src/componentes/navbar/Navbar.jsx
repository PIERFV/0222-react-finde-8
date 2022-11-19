import React, { useState } from 'react'
import styled from '@emotion/styled'
import BurguerButton from './BurguerButton'


 function Navbar({ size, setShow}){ 
    //se usa el metodo useState para actualizar el componente burguerbutton
    const [clicked, setClicked] = useState(false)
    const handleClick = () => {
      //cuando esta true lo pasa a false y vice versa
    setClicked(!clicked)
    }
    return(
      //handleClick en los links hace que cuando se haga click cierre el nav 
      // comparacion con un ternario  ? :handleClick={handleClick}  
      
        <NavContainer>
            <img className="card-img"
                src={require('../../imagenes/logo.jpg')}
                alt= 'logo de la empresa '
                onClick={() => setShow(true)}
                id='987'
                />
            <div  className={`links ${clicked ? 'active' : ''}`}>
            <div className='numer'><span >{size}</span></div>
                <a href="#"   onClick={() => setShow(false)}><svg xmlns="http://www.w3.org/2000/svg" 
                                                                                width="2.5rem" height="2rem" fill="currentColor" class="bi bi-cart4" viewBox="0 0 16 16">{size}
                                                                                <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0
                                                                                     0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3
                                                                                      0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0
                                                                                       5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2
                                                                                        2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
                                                                              </svg></a>
                <a  href="#987" onClick={() => setShow(true)}>inicio</a>
                <a href="#345" onClick={() => setShow(true)}>productos</a>
                <a href="#123" onClick={() => setShow(true)}>Nosotros</a>
              
            </div>
            <div className='burguer'>
                <BurguerButton clicked={clicked} handleClick={handleClick}/>
            </div>
        </NavContainer>
        
    )
    }

export default Navbar
//estilos componentes



const NavContainer = styled.nav`

img{
  
  margin-left:0.5rem;
  height: 3rem;
  width: 5rem;
  object-fit:contain;
  border-radius: 10%;
}
@media(max-width : 350px){
  width: 350px;
  padding: .4rem;
  background-color:#000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
}
position: sticky;
width: 100%;
padding: .4rem;
background-color:#000;
display: flex;
align-items: center;
justify-content: space-between;
z-index:1000;



.links{
  position:absolute;
  top:-43rem;
  visibility:hidden;
  right:0rem;
  width:17rem;
  display: flex;
  flex-direction:column;
  background-color:#5E5E5E;
  height:20rem;
  position:absolute;
  text-align: right;
  border-radius: 10%;
  z-index:99;
  transition: all .1s ease;
  a{
    margin-right:0.7rem;
    margin-top:0.7rem;
    text-decoration: none;
    color:#fff;
    font-size:1.2rem;
  }
  .numer{
    position:absolute;
    right:13.5rem;
    font-size:1.3rem;
    color:#000;
    top:.2rem;
    width:1.5rem;
    height:1.7rem;
    background-color:#fff;
    border-radius: 50%;
    padding-right:.4rem;
  }
}

.links.active{
  visibility:visible;
  width:13rem;
  display: flex;
  flex-direction:column;
  background-color:#5E5E5E;
  height :20rem;
  position:absolute;
  top:3.8rem;
  right:0rem;
  text-align: right;
  border-radius: 5% 0  5% 5%;
  transition: all .5s ease ;
  z-index:101;
  a{
    margin-right: 1rem;
    margin-top:0.7rem;
    text-decoration: none;
    color:#fff;
    font-size:1.2rem;
  }
  .numer{
    position:absolute;
    right:.5rem;
    font-size:1.2rem;
    color:#fff;
    top:0rem;
    width:1.5rem;
    height:1.7rem;
    background-color:#000;
    border-radius: 50%;
    padding-right:.4rem;
  }
}

@media(min-width : 800px){
  .burguer{
    position:absolute;
    top:-43rem;
    visibility:hidden;
  }

  @media(min-width : 800px){
    .links{
      position:absolute;
      top:0;
      right:5.8rem;
      flex-direction:row;
      background-color:#000;
      visibility:visible;
      height:3rem;
    }
    a{
    color: white;
    text-decoration: none;
    margin-right:0.5rem;
    margin-left:0.5rem;
    font-size:1.1rem;
    }
  }

}
  `

  
  

