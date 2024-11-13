import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './AuthContext'; 
import ProtectedRoute from './protectedRoute';
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
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<ProtectedRoute element={<Home />} />} />
          <Route path="/tablaTickets" element={<ProtectedRoute element={<TablaTickets />} />} />
          <Route path="/tablaEmpresas" element={<ProtectedRoute element={<TablaEmpresas />} />} />
          <Route path="tablaEmpresas/tablaEmpresasAreas" element={<ProtectedRoute element={<TablaEmpresasAreas />} />} />
          <Route path="/tablaEmpresas/tablaEmpresasAreas/tablaEmpresasTickets" element={<ProtectedRoute element={<TablaEmpresasTickets />} />} />
          <Route path="/tablaEmpleados" element={<ProtectedRoute element={<TablaEmpleados />} />} />
          <Route path="tablaEmpleados/tablaEmpleadoUnico" element={<ProtectedRoute element={<TablaEmpleadoUnico />} />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
