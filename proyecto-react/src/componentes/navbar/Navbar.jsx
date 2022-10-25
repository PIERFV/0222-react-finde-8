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
      // comparacion con un ternario  ? :handleClick={handleClick}  
      
        <NavContainer>
            <img className="card-img"
                src={require('../../imagenes/logo.jpg')}
                alt= ''
                />
            <div  className={`links ${clicked ? 'active' : ''}`}>
                <a  href="https://developer.mozilla.org/es/docs/Web/CSS/z-index">inicio</a>
                <a href="https://developer.mozilla.org/es/docs/Web/CSS/z-index">productos</a>
                <a href="https://developer.mozilla.org/es/docs/Web/CSS/z-index">Nosotros</a>
                <a href="https://developer.mozilla.org/es/docs/Web/CSS/z-index">Compras</a>
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
}

.links.active{
  visibility:visible;
  width:13rem;
  display: flex;
  flex-direction:column;
  background-color:#5E5E5E;
  height :20rem;
  position:absolute;
  top:3.9rem;
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

  
  

