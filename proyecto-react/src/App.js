import './App.css';
import Repuestos from './componentes/Repuestos';
import Card from './componentes/Card';
import Navbar from './componentes/navbar/Navbar';
import PieDePag from './componentes/footer/Footer';




function App() {
  return (
    <>
      <div className="App">
        <Navbar/>
        <div className='contenedor-principal'>
          <Repuestos
          imagen = 'aceite'
          repuesto = 'Aceite - Total'
          descripcion = 'auto de primera mano Muy cuidado Altas prestaciones' />

          <Repuestos
          imagen = 'bomba-agua'
          repuesto = 'Bomba de Agua - Peugeot'
          descripcion = 'Bomba de Agua SKF Peugeot 205 1.8D Diesel 92-00' />

          <Repuestos
          imagen = 'embrague'
          repuesto = 'Embrague - Ford'
          descripcion = 'auto de primera mano Muy cuidado Altas prestaciones' />
        </div>
        <div className='contenedor_card_general'>
          <Card
          card_imagen = 'cubrealfombra'
          titulo_card = 'Cubre Alfombra'
          texto_card = 'Cubre alfombra de goma Vapren para habitáculo Audi A3'/>
          <Card
          card_imagen = 'depositorefrigerante'
          titulo_card = 'Deposito Refrigerante'
          texto_card = 'Deposito recuperador agua con tapa para Ford Ka'/>
          <Card
          card_imagen = 'filtroaceite'
          titulo_card = 'Filtro de Aceite Vw'
          texto_card = 'Filtro de aceite original Volkswagen 3.0 v6'/>
        </div>
      </div>
      <PieDePag/>
    </>
    
  );
}

export default App;

