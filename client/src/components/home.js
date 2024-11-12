// Home.js
import React from 'react';
import Titulo from './title';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  const redireccionTickets = () => {
    navigate(`/tablaTickets`);
  };
  const redireccionEmpleados = () => {
    navigate(`/tablaEmpleados`);
  };
  const redireccionEmpresas = () => {
    navigate(`/tablaEmpresas`);
  };

  return (
    <>
      <div style={styles.body}>
        <div style={styles.boxcontainer}>
          <Titulo titulo="Bienvenido al tablero de Tickets" />
          <div style={styles.container}>
            <span style={styles.secciones} onClick={() => redireccionEmpresas()}>Empresas</span>
            <span style={styles.secciones} onClick={() => redireccionEmpleados()}>Empleados</span>
            <span style={styles.secciones} onClick={() => redireccionTickets()}>Tickets</span>
          </div>
        </div>
      </div>
    </>
  );
}

const styles = {
  body: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    background: '#335c81',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  secciones: {
    cursor: 'pointer',
    padding: '5px',
  },
  boxcontainer: {
    width: '100%',
    maxWidth: '400px',
    padding: '20px',
    backgroundColor: '#f9f9f9',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)', 
    borderRadius: '8px', 
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: 'auto',
    marginTop: 'auto',
  }
};

export default Home;
