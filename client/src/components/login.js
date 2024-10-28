import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [usuario, setUsuario] = useState('');
    const [clave, setClave] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        const response = await fetch('http://localhost:9000/backend/login.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams({
                'usuario': usuario,
                'clave': clave
            })
        });

        const data = await response.json();
        
        if (data.success) {
            navigate('/home');
        }else{
            setMessage(data.message);
        }
    };

    return (
        <form onSubmit={handleLogin} style={styles.form}>
            <h1>Ingreso</h1>
            <div style={styles.inputContainer}>          
                <input
                    type="text"
                    placeholder="Usuario"
                    value={usuario}
                    onChange={(e) => setUsuario(e.target.value)}
                    required
                    style={styles.input}
                />
                <input
                    type="password"
                    placeholder="Clave"
                    value={clave}
                    onChange={(e) => setClave(e.target.value)}
                    required
                    style={styles.input}
                />
                <button type="submit" style={styles.button}>Ingresar</button>
            
                {message && <p>{message}</p>}
            </div>
        </form>
    );
};
const styles = {
    form: {
        display: 'flex',
        flexDirection: 'column',
        width: '300px', // Ancho del formulario
        margin: '250px auto', // Centrar el formulario
    },
    inputContainer: {
        marginBottom: '15px', // Espacio entre inputs
    },
    input: {
        width: '100%', // Ancho completo del input
        padding: '10px', // Espaciado interno del input
        border: '1px solid #ccc', // Borde del input
        borderRadius: '4px', // Bordes redondeados
        margin: '10px'
    },
    button: {
        padding: '10px',
        backgroundColor: '#007BFF', // Color de fondo del botón
        color: '#fff', // Color del texto del botón
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        margin: '10px'
    },
};
export default Login;