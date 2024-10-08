import React, { useState } from "react";

const Login = () => {
  const [usuario, setUsuario] = useState("");
  const [clave, setClave] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch("http://localhost:9000/backend/login.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ usuario, clave }),
      });
  
      const text = await response.text(); // Obtiene la respuesta como texto
      console.log("Respuesta del servidor:", text); // Muestra la respuesta en la consola
  
      if (!response.ok) {
        throw new Error("Error en la respuesta del servidor");
      }
  
      // Intenta convertir el texto a JSON
      let data;
      try {
        data = JSON.parse(text);
      } catch (e) {
        console.error("Error al analizar JSON:", e);
        throw new Error("Respuesta no es un JSON válido");
      }
  
      if (data.status) {
        setSuccessMessage("¡Login exitoso!");
        setErrorMessage("");
      } else {
        setErrorMessage("Usuario o clave incorrectos");
        setSuccessMessage("");
      }
    } catch (error) {
      setErrorMessage("No se pudo conectar con el servidor.");
      console.error("Error de fetch:", error);
    }
  };
  
  

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Usuario:</label>
          <input
            type="text"
            value={usuario} // Valor es usuario
            onChange={(e) => setUsuario(e.target.value)} // Se actualiza usuario
            required
          />
        </div>
        <div>
          <label>Clave:</label>
          <input
            type="password"
            value={clave} // Valor es clave
            onChange={(e) => setClave(e.target.value)} // Se actualiza clave
            required
          />
        </div>
        <button type="submit">Iniciar sesión</button>
      </form>
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
    </div>
  );
};

export default Login;
