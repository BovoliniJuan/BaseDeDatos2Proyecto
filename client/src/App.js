// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/login'; 
import Home from './components/home'; 

import TablaEmpleados from './components/Empleados/tablaEmpleados';
import TablaEmpleadoUnico from './components/Empleados/tablaEmpleadoUnico';

import TablaEmpresas from './components/Empresas/tablaEmpresas';
import TablaEmpresasAreas from './components/Empresas/tablaEmpresasAreas';
import TablaEmpresasTickets from './components/Empresas/tablaEmpresasTickets';

import TablaTickets from './components/Tickets/tablaTickets';

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
      
        <Route path="/tablaEmpleados" element={<TablaEmpleados />} /> {}
        <Route path="tablaEmpleados/tablaEmpleadoUnico" element={<TablaEmpleadoUnico />} />
      </Routes>
    </Router>
  );
}

export default App;
