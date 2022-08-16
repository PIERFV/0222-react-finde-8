import './App.css';
import Repuestos from './componentes/Repuestos';




function App() {
  return (
    <div className="App">
      
      <div className='contenedor-principal'>
        <Repuestos
        imagen = 'aceite'
        repuesto = 'Aceite - Total'
        descripcion = 'TOTAL QUARTZ 7000 NAFTA/DIESEL 10W40 X4LTS.' />

        <Repuestos
        imagen = 'bomba-agua'
        repuesto = 'Bomba de Agua - Peugeot'
        descripcion = 'Bomba de Agua SKF Peugeot 205 1.8D Diesel 92-00' />

        <Repuestos
        imagen = 'embrague'
        repuesto = 'Embrague - Ford'
        descripcion = 'Embrague Ford Focus - Linea 2014/2020' />
      </div>
      
    </div>
  );
}

export default App;

