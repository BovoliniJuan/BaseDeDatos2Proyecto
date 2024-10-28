import React, { useEffect, useState } from 'react';

const TablaEmpleados = () => {
  const [empleados, setEmpleados] = useState([]);

  useEffect(() => {
    // Hacer una solicitud para obtener los datos desde el archivo PHP
    fetch('http://localhost:9000/backend/infoEmpleados.php')
      .then(response => response.json())
      .then(data => setEmpleados(data))
      .catch(error => console.error('Error al obtener los datos:', error));
  }, []);

  return (
    <table border="1">
      <thead>
        <tr>
          <th>DNI</th>
          <th>Nombre</th>
          <th>Apellido</th>
        </tr>
      </thead>
      <tbody>
        {empleados.map((persona, index) => (
          <tr key={index}>
            <td>{persona.dni}</td>
            <td>{persona.nombre}</td>
            <td>{persona.apellido}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TablaEmpleados;
