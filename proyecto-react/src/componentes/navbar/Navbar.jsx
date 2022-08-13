import React, { useState } from 'react'
import styled from '@emotion/styled'
import BurguerButton from './BurguerButton'


function Navbar(){ 
    
    const [clicked, setClicked] = useState(false)
    const handleClick = () => {
      //cuando esta true lo pasa a false y vice versa
    setClicked(!clicked)
    }
    return(
        <NavContainer>
            <h2>Logo</h2>
            <div  className={`links ${clicked ? 'active' : ''}`}>
                <a  onClick={handleClick} href="#">inicio</a>
                <a  onClick={handleClick} hhref="#">productos</a>
                <a  onClick={handleClick} hhref="#">¿Que hacemos</a>
            </div>
            <div className='burguer'>
                <BurguerButton clicked={clicked} handleClick={handleClick} />
            </div>
        </NavContainer>
    )
    }

export default Navbar

const NavContainer = styled.nav`
  h2{
    color: white;
    font-weight: 400;
    span{
      font-weight: bold;
    }
  }
  padding: .4rem;
  background-color: #007EE5;
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
    left: -2000px;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    transition: all .5s ease;
    a{
      color: white;
      font-size: 2rem;
      display: block;
    }
    @media(min-width: 768px){
      position: initial;
      margin: 0;
      a{
        font-size: 1rem;
        color: #fff;
        display: inline;
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
    background-color:rgba( 230, 244 , 241 , .7);
    border-radius: 0 0  70% 60%;
    transition: all .7s ease ;
    cursor : pointer;
    a{
      font-size: 1.5rem;
      margin-top: .3rem;
      color: #000;
    }
  }
  .burguer{
    @media(min-width: 768px){
      display: none;
    }
  }`

