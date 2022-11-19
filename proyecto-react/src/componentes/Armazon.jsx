import React, { useState } from "react";
import list from "./data";
import Card from "../componentes/Card";
import styled from '@emotion/styled'


function Armazon({handleCart}){
    return(
        
        
            <Estruct>
            
                {list.map((item) => (
            <Card key={item.id} item={item} handleCart={handleCart} />
                ))}
                
        </Estruct>
       
        
        
    )
}


const Estruct = styled.div`
* {
    margin: 0;
    padding: 0;
  }
    width: 80%;
    margin: auto;
    margin-top: 5%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    gap: 30px;

   
      
   
      @media (max-width: 530px){
        
        margin-left: 0.5rem;
        grid-template-rows: auto;
        grid-template-columns: repeat(2, 1fr);
    }@media (max-width: 500px){
        
        padding-left:33%;
        
        grid-template-rows: auto;
        grid-template-columns: repeat(1, 1fr);
    }
 
      @media (max-width: 330px){
        padding-left:0;
          margin-left: 2rem;
        
      }
      @media (min-width: 530px){
        
        margin-left: 1rem;
        grid-template-rows: auto;
        grid-template-columns: repeat(2, 1fr);
    }
      @media (min-width: 750px){
        
        display: grid;
        grid-template-columns: repeat(auto-fit, [col-start] minmax(11rem, 1fr) [col-end]);
        gap: 5rem;
        margin-top: 3.5rem;
        margin-left: 3rem;
    }
`
export default Armazon





