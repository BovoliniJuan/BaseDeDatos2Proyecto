import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
    return (
        <div style={styles.menu}>
            <h1>Menú Principal</h1>
            <ul style={styles.list}>
                <li><Link to="/tickets">Tickets</Link></li>
                <li><Link to="/empleados">Empleados</Link></li>
                <li><Link to="/localidades">Localidades</Link></li>
            </ul>
        </div>
    );
};

// Estilos en línea (opcional)
const styles = {
    menu: {
        textAlign: 'center',
        marginTop: '50px',
    },
    list: {
        listStyle: 'none',
        padding: 0,
    },
};

export default Menu;
