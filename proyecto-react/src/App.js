import './App.css';
import Repuestos from './componentes/Repuestos';




function App() {
  return (
    <div className="App">
      
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
      
    </div>
  );
}

export default App;

