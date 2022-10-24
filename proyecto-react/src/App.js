import './App.css';
import Carrusel from './componentes/Carrusel';
import Card from './componentes/Card';
import Navbar from './componentes/navbar/Navbar';
import PieDePag from './componentes/footer/Footer';




function App() {
  return (
    
    <>
    <Navbar/>
    <div className="App">
      <Card
            card_imagen = 'cubrealfombra'
            titulo_card = 'Cubre Alfombra'
            texto_card = 'Cubre alfombra de goma Vapren para habitáculo Audi A3'/>
          
    </div>
    </>
    
  );
}

export default App;

