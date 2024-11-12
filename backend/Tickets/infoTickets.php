<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

include '../server.php';

header('Content-Type: application/json');

include '../connect.php';
session_start();
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Credentials: true");

if (!isset($_SESSION['usuario'])) {
    echo json_encode(['success' => false, 'message' => 'No autorizado']);
    exit;
}
// Consulta para obtener los datos
$sql = 
"SELECT t.id AS nro_ticket, e.nombre AS empresa, a.nombre_area AS area, t.fecha_envio AS fecha, t.abierto AS abierto
FROM tickets t
JOIN empresas e ON t.id_empresa = e.id
JOIN areas a ON t.id_area = a.id";
$result = $conn->query($sql);


// Crear un array para almacenar los datos
$tickets = [];

if ($result->num_rows > 0) {
    // Agregar cada fila de resultado al array
    while ($row = $result->fetch_assoc()) {
        $tickets[] = $row;
    }
}

// Devolver los datos en formato JSON
echo json_encode($tickets);

// Cerrar la conexión
$conn->close();
?>