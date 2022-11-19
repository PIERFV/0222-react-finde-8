import React  ,{useState} from "react";
import styled from '@emotion/styled'
import  Modal from './Ventana/modal'



function Card ({item , handleCart}) {
  const [estadoModal2, cambiarEstadoModal2] = useState(false);
  const { title, descripcion, price, img } = item;
    //cuando esta true lo pasa a false y vice versa
        
  return (
    <div className="fijo">
      <Cartas
      id="345"
      >
        <img className="card-img"
       src={img}
        />
        <div className="card-info">
          <p >{title}</p>
          <p >{descripcion}</p>
        <span class="text-title">$ {price}</span>
        </div>

        <Bottonnes onClick={() =>cambiarEstadoModal2(!estadoModal2) }>compra
            
              <Modal
                                estado={estadoModal2}
                                cambiarEstado={cambiarEstadoModal2}
                                titulo=" Repuestos "
                                mostrarHeader={true}
                                mostrarOverlay={true}
                                padding={'20px'}
                                >
                                <Contenido>
                                <h1>Confirmar compra</h1>
                                    <img
                                className="imgVentana"
                                src={img}
                                    />
                                    
                                    <Boton  onClick={()=>handleCart(item)}>aceptar</Boton>
                                </Contenido>
                        </Modal>
           
 
        </Bottonnes>

      </Cartas>
    </div>
      
  )   
}



export default Card





const Cartas  = styled.div`

  width: 11rem;
  height: 66vh;
  padding: .8rem;
  background: #f5f5f5;
  position: static;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  padding-bottom: 1rem;
  border-radius: 5% 5% 5% 5%;
  left: 1rem;
  z-index: 1;
 
  &:hover{
    box-shadow: 0 10px 10px 10px rbga(0, 0, 0, 0.1);
    cursor: pointer;
  }


  .card-img {
    border: 1px solid #000;
    height: 40%;
    width: 100%;
    border-radius: .5rem;
    transition: .3s ease;
    object-fit:contain;
    z-index: 1;
  }

  .card-img:hover {
    transform: translateY(-25%);
    box-shadow: rgba(226, 196, 63, 0.25) 0px 13px 47px -5px, rgba(180, 71, 71, 0.3) 0px 8px 16px -8px;
    z-index: 1;
  }
  .card-info p:nth-child(1) {
    font-weight: bold;
  }
  .card-info p:nth-child(2) {
    color: grey;
    font-size: 0.8rem;
  }
  .card-info p:nth-child(3) {
    font-weight: bolx;
    color: grey;
  }
  .text-title {
    font-weight: 900;
    font-size: 1.2em;
    line-height: 1.5;
    z-index: 1;
  }

  
.imgVentana{

  height: 40%;
  width:50%;
  border-radius: .5rem;
  object-fit:contain;
  z-index: 1;
}
.fijo{
  width: auto;
height:auto;

  

}
`



const Boton = styled.button`
margin-top: .5rem;
padding: 10px;
font-size: 15px;
outline: none;
border: 2px solid black;
background-color: white;
color: white;
position: relative;
letter-spacing: 1px;
border-radius: 15% 15% 15% 15%;
margin-bottom:1rem ;
margin-left: .5rem;
margin-right: 1rem;


&::before {
  content: 'Aceptar';
/*Button's value/text-content */
position: absolute;
top: -14%;
left: 7%;
background-color: black;
width: 100%;
height: 100%;
color: white;
display: flex;
align-items: center;
justify-content: center;
transition: 0.15s ease-in-out;
font-weight: bold;
border-radius: 15% 15% 15% 15%;
margin-bottom:1rem ;
margin-left: .5rem;
margin-right: 1rem;
}

&:hover::before {
top: 0;
left: 0;
border-radius: 15% 15% 15% 15%;
margin-bottom:1rem ;
margin-left: .5rem;
margin-right: 1rem;
}
`;

const Contenido = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	h1 {
		font-size: 42px;
		font-weight: 700;
		margin-bottom: 10px;
		color:#000;
	}
	p {
		color:#000;
		font-size: 18px;
		margin-bottom: 20px;
	}
	
`;



const Bottonnes = styled.button`
    margin-top: .5rem;
    padding: 10px;
    font-size: 15px;
    outline: none;
    border: 2px solid black;
    background-color: white;
    color: white;
    position: relative;
    letter-spacing: 1px;
    border-radius: 15% 15% 15% 15%;
    margin-bottom:1rem ;
    margin-left: .5rem;
    margin-right: 1rem;

   
   &::before {
    content: 'Comprar';
    /*Button's value/text-content */
    position: absolute;
    top: -14%;
    left: 7%;
    background-color: black;
    width: 100%;
    height: 100%;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.15s ease-in-out;
    font-weight: bold;
    border-radius: 15% 15% 15% 15%;
    margin-bottom:1rem ;
    margin-left: .5rem;
    margin-right: 1rem;
   }
   
   &:hover::before {
    top: 0;
    left: 0;
    border-radius: 15% 15% 15% 15%;
    margin-bottom:1rem ;
    margin-left: .5rem;
    margin-right: 1rem;
   }




`