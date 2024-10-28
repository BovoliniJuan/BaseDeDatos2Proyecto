// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/login'; 
import Home from './components/home'; 
import TablaEmpleados from './components/Empleados/tablaEmpleados';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />   {/* Aquí estás usando Route */}
        <Route path="/home" element={<Home />} /> {/* Aquí también */}
        <Route path="/tablaEmpleados" element={<TablaEmpleados />} /> {/* Aquí también */}
      </Routes>
    </Router>
  );
}

export default App;
