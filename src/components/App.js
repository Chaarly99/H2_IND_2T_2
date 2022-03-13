
import './App.css';
//import { Navbar, Nav, Container} from 'react-bootstrap';
//import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/Home'
import About from './pages/About'
import Contacto from './pages/Contacto'
import Datos from './pages/Datos'
import DatosExt from './pages/DatosExt'
import Navbar from './Navbar/Navbar'


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/contacto' element={<Contacto/>} />
          <Route path='/datos' element={<Datos/>} />
          <Route path='/datosExt' element={<DatosExt/>} />
        </Routes>
      </Router>

      <header className="App-header">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>      
        <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
      </header>
    </div>
  );
}

export default App;
