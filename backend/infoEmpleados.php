<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

include 'server.php';

header('Content-Type: application/json');

include 'connect.php';

// Consulta para obtener los datos
$sql = "SELECT dni, nombre, apellido FROM empleados";
$result = $conn->query($sql);

// Crear un array para almacenar los datos
$empleados = [];

if ($result->num_rows > 0) {
    // Agregar cada fila de resultado al array
    while ($row = $result->fetch_assoc()) {
        $empleados[] = $row;
    }
}

// Devolver los datos en formato JSON
echo json_encode($empleados);

// Cerrar la conexión
$conn->close();
?>