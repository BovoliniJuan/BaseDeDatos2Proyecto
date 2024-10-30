<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

include '../server.php';

header('Content-Type: application/json');

include '../connect.php';

// Consulta para obtener los datos
if(!isset($_GET['empleado'])){
    $sql = "SELECT 
    e.id AS id,
    e.nombre AS nombre,
    e.apellido AS apellido,
    e.dni AS dni,
    COUNT(tr.id_ticket) AS cantidad_tickets_contestados
FROM 
    empleados e
LEFT JOIN 
    tickets_respuestas tr ON e.id = tr.id_empleado
GROUP BY 
    e.id, e.nombre, e.apellido;";
}else{
    $idempleado = $_GET['empleado'];
    $sql = 
    "SELECT 
        t.id AS ticket_id,
        e.nombre AS empleado_nombre,
        e.apellido AS empleado_apellido,
        emp.nombre AS empresa,
        a.nombre_area AS area,
        t.fecha_envio AS fecha,
        t.abierto
    FROM 
        tickets_respuestas tr
    JOIN 
        tickets t ON tr.id_ticket = t.id
    JOIN 
        empleados e ON tr.id_empleado = e.id
    JOIN 
        empresas emp ON t.id_empresa = emp.id
    JOIN 
        areas a ON t.id_area = a.id
    WHERE 
        tr.id_empleado = $idempleado;";
}

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