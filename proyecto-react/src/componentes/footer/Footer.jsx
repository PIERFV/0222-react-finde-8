import React from  'react'
import styled from '@emotion/styled'
import InputEmail from './InputEmail'
import Button from './ButtonR'

function PieDePag (){
    return (
        <>
        <Footer>
        < div className='Descripcion'>
                <h3> Nosotros !!</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium laudantium, tempora ducimus, 
                    consequuntur ad a, temporibus quis quaerat exercitationem vel totam labore natus? Nostrum eos quo,
                    maxime placeat perferendis sapiente. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur,
                    consequuntur accusamus blanditiis ex laudantium ipsa eligendi est! Assumenda qui quas iure laborum cupiditate,
                    praesentium tenetur exercitationem esse delectus suscipit harum!</p>
                    <ul>
                        <li><a href="#"> inicio</a></li>
                        <li><a href="#"> Productos</a></li>
                        <li><a href="#">Nosotros</a></li>
                    </ul>
            </ div>
            <div className="logo_input">
                <h3> Logo </h3>
                <p>¿ Quieres recibir promociones ?</p>
                <form>
                    <InputEmail tipo="email" name="correo" id="09876" required />
                    <Button/>
                </form>
            </div>
        </Footer>
        </>
    )
}

export default PieDePag

const Footer = styled.footer`
    
    width : 100%;
    background-color: #324A51;
    height: 65vh;
    display : flex;
    justify-content: space-around;
    flex-direction: row-reverse;
    padding: .4rem;

.Descripcion{
   width : 75%;
   background-color: #324A51;
   text-align: center;
   height: 55vh;
}
.Descripcion p{
    color : #000;
}
ul {
    padding: 2rem;
    text-align: left;
    list-style: none;
}
li{
    margin: 3vh;
}
/*naranja #FB9039;*/

li a{
    color: #000;
    text-decoration: none;
    padding: 2rem;
    
}
.logo_input{
    background-color:#324A51;
    width: 25%;
    height: 55vh;

}

.logo_input h3{
    text-align : left ;
    margin-left : 1rem;
    margin-top : 1.3rem
}

.logo_input p{
    margin-top : 2.5rem;
    margin-left : 1.2rem;
    margin-bottom: 1.2rem;
    font-weight: bold;

}
from{
    margin-left : 1rem;
}

`

