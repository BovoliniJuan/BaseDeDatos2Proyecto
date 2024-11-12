import React from 'react';

const Titulo = ({ titulo }) => {

    const styles = {
        boxTitulo:{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '20vh',
        },
        titulo:{
            color: '#335c81',
            fontSize: '20px',
            fontWeight: '700',
        }
    };

    return(
        <div style={styles.boxTitulo}>
            <h1 style={styles.titulo}>{titulo}</h1>
        </div>
    );
};

export default Titulo;