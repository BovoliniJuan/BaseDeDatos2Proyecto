import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';
const Login = () => {
    const [usuario, setUsuario] = useState('');
    const [clave, setClave] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();
    const { login } = useAuth();

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
            login();
            navigate('/home');
        } else {
            setMessage(data.message);
        }
    };

    return (
        <form onSubmit={handleLogin} style={styles.form}>
            <div style={styles.boxContainer}>
                <h1 style={styles.title}>Ingreso</h1>
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
                {message && <p style={styles.message}>{message}</p>}
            </div>
        </form>
    );
};

const styles = {
    form: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        background: '#335c81',
    },
    title: {
        marginBottom: '20px',
        fontSize: '24px',
        color: '#904e55',
        fontWeight: 'bold',
    },
    boxContainer: {
        width: '100%',
        maxWidth: '400px',
        padding: '20px',
        backgroundColor: '#f9f9f9', // Fondo del contenedor
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)', // Sombra
        borderRadius: '8px', // Bordes redondeados
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    input: {
        width: '100%',
        padding: '10px',
        border: '1px solid #ccc',
        borderRadius: '4px',
        marginBottom: '15px',
    },
    button: {
        width: '100%',
        padding: '10px',
        backgroundColor: '#904e55',
        color: '#fff',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        marginTop: '10px',
    },
    message: {
        color: 'red',
        marginTop: '10px',
    },
};

export default Login;
