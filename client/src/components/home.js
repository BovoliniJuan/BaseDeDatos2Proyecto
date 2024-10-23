// Home.js
import React from 'react';

function Home() {
  return (
    <div style={styles.container}>
      <h1>Bienvenido a la página principal</h1>
      <p>Has iniciado sesión correctamente. ¡Disfruta de tu estancia!</p>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f5f5f5',
  },
};

export default Home;
