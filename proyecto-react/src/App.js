import './App.css';
import Autos from './componentes/Autos';




function App() {
  return (
    <div className="App">
      
      <div className='contenedor-principal'>
        <Autos
        imagen = 'aceite'
        auto = 'focus'
        modelo = '2020'
        kilometraje = '100000'
        descripcion = 'auto de primera mano Muy cuidado Altas prestaciones' />

        <Autos
        imagen = 'bomba-agua'
        auto = 'focus'
        modelo = '2020'
        kilometraje = '100000'
        descripcion = 'auto de primera mano Muy cuidado Altas prestaciones' />

        <Autos
        imagen = 'embrague'
        auto = 'focus'
        modelo = '2020'
        kilometraje = '100000'
        descripcion = 'auto de primera mano Muy cuidado Altas prestaciones' />
      </div>
      
    </div>
  );
}

export default App;

