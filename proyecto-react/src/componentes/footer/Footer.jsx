import React from  'react'
import styled from '@emotion/styled'
import InputEmail from './InputEmail'
import Button from './ButtonR'

// falta una funcion para eviatar el que cuando se envie el formulario no carge la pagina 
function PieDePag (){
    return (
        <>
        <Footer >
            <div className="logo_input">
            <img className="card-img"
                src={require('../../imagenes/logo.jpg')}
                alt= 'logo de la empresa'
                />
                <p>¿ Quieres recibir promociones ?</p>
                <form>
                    <div className="formu">
                    <InputEmail tipo="email" name="correo" id="09876" required />
                    </div>
                    <div className="boton">
                    <Button type = "submit" id="09876"/>
                    </div>
                </form>
                </div>
                < div className='Descripcion'>
                <h3 id='123'> Nosotros !!</h3>
                <p >Fue fundada en 1978, fruto de la necesidad de abastecer las demandas del sector, las cuales serían satisfechas en el corto plazo, poniendo acento en la comunicación, distribución, soluciones a medida y calidad en sus productos.
                    Iniciando sus actividades en la Ciudad Autónoma de Buenos Aires, más tarde, se trasladó a Avellaneda, colocándose al alcance de los consumidores a través de su conocimiento, confiabilidad y respaldo.
                    Hoy es sinónimo de liderazgo, prestigio, eficacia y eficiencia en los servicios a través de nuestra red de sucursales estratégicamente ubicadas.</p>
                    <ul >
                        <li><a href="#987"> inicio</a></li>
                        <li><a href="#345"> Productos</a></li>
                        <li><a href="#123">Nosotros</a></li>
                    </ul>
                    
            </ div>
                
            
            <div className='copyrighty '>
                <p > Copyright - 2022</p>
            </div>
        </Footer>
        </>
    )
}


export default PieDePag
// estilizar componentes 
const Footer = styled.div`
display:grid;
background-color:#000;
margin-top: 3.5rem;
width:100%;
height:100%;
grid-template-columns: repeat(2, 1fr);

.logo_input{
    width:100%;
    display:grid;
    color:#fff;
    background-color:#000;
    p{
        margin-bottom:-2rem;
    }
    img {
        margin-left:0.5rem;
        height: 3rem;
        width: 5rem;
        object-fit:contain;
        border-radius: 10%;
        margin-bottom:0.7rem;
        margin-top:0.7rem;
    }
    .formu{
        
        margin-bottom:0.7rem;
        margin-left:1.7rem;
    }
    .boton{
        margin-left:3.7rem;
    }

}
.Descripcion{
    width:100%;
    display:grid;
    margin-top: 2.5rem;
    background-color:#000;
    color:#fff;
    text-align:center;
    ul{ 
    list-style:none;
    text-align:left;
    }
    a{
        text-decoration: none;
        color:#fff;
        margin-left:0rem;
        font-size:1.1rem;
        margin-top:0.7rem;
        margin-bottom:0.7rem;
    }
}
.copyrighty{
    text-align:center;
    color:#fff;
    margin-bottom:0rem;
    width:100%;
    grid-row:3;
    grid-column: 1 / 3;
    background-color:#000;
    p{
        padding-top: 2rem;
    }
}




/* 800 */
@media(max-width : 800px){
    width: 100%;
    padding: .4rem;
    background-color:#000;
    margin-top: 3.5rem;
    height:100%;
    grid-template-columns: 1fr;
  }

  @media(max-width : 800px){
    .Descripcion{
        width:100%;
        float:none;
        display:flex;
        flex-direction:column;
        margin-top: 2.5rem;
        background-color:#000;
        color:#fff;
        text-align:center;
        ul{ 
        list-style:none;
        text-align:left;
        }
        a{
            text-decoration: none;
            color:#fff;
            margin-left:0rem;
            font-size:1.1rem;
            margin-top:0.7rem;
            margin-bottom:0.7rem;
        }
    }
  }

  @media(max-width : 800px){
    .copyrighty{
        text-align:center;
        color:#fff;
        margin-bottom:0rem;
        background-color:#000;
        p{
            padding-top: 2rem;
        }
    }
}

@media(max-width : 800px){
    .logo_input{
        width:100%;
        background-color:#000;
        color:#fff;
        display:flex;
        flex-direction:column;
        p{
            margin-bottom:0.7rem;
            padding-top: 2rem;
            margin-left:1.7rem;
        }
        img {
            margin-left:0.5rem;
            height: 3rem;
            width: 5rem;
            object-fit:contain;
            border-radius: 10%;
            margin-bottom:0.7rem;
            margin-top:0.7rem;
        }
        .formu{
            margin-top:0.7rem;
            margin-bottom:0.7rem;
            margin-left:1.7rem;
        }
        .boton{
            margin-left:3.7rem;
        }
    }

}

/* 350 */
@media(max-width : 350px){
    width: 350px;
    background-color:#000;
    grid-template-columns: 1fr;
}

@media(max-width : 350px){
    .logo_input{
        color:#fff;
        grid-row:1;
        img {
            margin-left:0.5rem;
            height: 3rem;
            width: 5rem;
            object-fit:contain;
            border-radius: 10%;
            margin-bottom:0.7rem;
            margin-top:0.7rem;
        }
        .formu{
            margin-top:0.7rem;
            margin-bottom:0.7rem;
            margin-left:1.7rem;
        }
        .boton{
            margin-left:3.7rem;
        }
    }

}

@media(max-width : 350px){
    .Descripcion{
        margin-top: 2.5rem;
        background-color:#000;
        color:#fff;
        text-align:center;
        grid-row:2;
        a{
            text-decoration: none;
            color:#fff;
            margin-right:9rem;
            font-size:1.1rem;
            margin-top:0.7rem;
            margin-bottom:0.7rem;
        }
    }
  }

  @media(max-width : 350px){
    .copyrighty{
        grid-row:3;
        text-align:center;
        color:#fff;
        margin-bottom:0rem;
        background-color:#000;
        p{
            padding-top: 2rem;
        }
    }
}


`

