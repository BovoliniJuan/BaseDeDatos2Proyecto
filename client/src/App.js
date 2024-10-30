// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/login'; 
import Home from './components/home'; 
import TablaEmpleados from './components/Empleados/tablaEmpleados';
import TablaEmpresas from './components/Empresas/tablaEmpresas';
import TablaTickets from './components/Tickets/tablaTickets';
import TablaEmpresasAreas from './components/Empresas/tablaEmpresasAreas';
import TablaEmpresasTickets from './components/Empresas/tablaEmpresasTickets';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} /> {}
        <Route path="/home" element={<Home />} /> {}
        <Route path="/tablaTickets" element={<TablaTickets />} /> {}
        <Route path="/tablaEmpresas" element={<TablaEmpresas />} /> {}
        <Route path="tablaEmpresas/tablaEmpresasAreas" element={<TablaEmpresasAreas />} />
        <Route path="/tablaEmpresas/tablaEmpresasAreas/tablaEmpresasTickets" element={<TablaEmpresasTickets />} />
      </Routes>
    </Router>
  );
}

export default App;
