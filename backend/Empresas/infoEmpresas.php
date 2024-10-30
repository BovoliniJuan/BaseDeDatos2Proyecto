<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

include '../server.php';

header('Content-Type: application/json');

include '../connect.php';

// Consulta para obtener los datos
if(!isset($_GET['empresa']) && !isset($_GET['area'])){
    $sql = 
    "SELECT 
        emp.id AS id,
        emp.nombre AS empresa,
        loc.nombre AS localidad,
        COUNT(t.id) AS cantidadTickets,
        SUM(CASE WHEN t.abierto = 1 THEN 1 ELSE 0 END) AS abiertos,
        SUM(CASE WHEN tr.resuelto = 'S' THEN 1 ELSE 0 END) AS resueltos
    FROM 
        empresas emp
    JOIN 
        localidades loc ON emp.id_localidad = loc.id
    LEFT JOIN 
        tickets t ON emp.id = t.id_empresa
    LEFT JOIN 
        tickets_respuestas tr ON t.id = tr.id_ticket
    GROUP BY 
        emp.nombre, loc.nombre";
}
if(isset($_GET['empresa']) && !isset($_GET['area'])){
    $idEmpresa = $_GET['empresa'];
    $sql = 
    "SELECT a.id as id, a.nombre_area AS area, COUNT(t.id) AS cantidad_tickets, 
    SUM(CASE WHEN t.abierto = 1 THEN 1 ELSE 0 END) AS cantidad_abiertos,
     SUM(CASE WHEN tr.resuelto = 'Y' THEN 1 ELSE 0 END) AS cantidad_resueltos
    FROM 
        empresas e
    JOIN 
        tickets t ON e.id = t.id_empresa
    JOIN 
        areas a ON t.id_area = a.id
    LEFT JOIN 
        tickets_respuestas tr ON t.id = tr.id_ticket
    WHERE 
        e.id = $idEmpresa
    GROUP BY 
        a.nombre_area;";
}
if(isset($_GET['empresa']) && isset($_GET['area'])){
    $idEmpresa = $_GET['empresa'];
    $idArea = $_GET['area'];
    $sql = 
    "SELECT 
        t.id AS nro_ticket,
        t.fecha_envio AS fecha,
        t.abierto AS abierto,
    CASE 
        WHEN tr.resuelto = 'S' THEN 1 
        ELSE 0 
    END AS resuelto
    FROM 
        tickets t
    LEFT JOIN 
        tickets_respuestas tr ON t.id = tr.id_ticket
    WHERE t.id_area = $idArea AND t.id_empresa = $idEmpresa";
}

$result = $conn->query($sql);

// Crear un array para almacenar los datos
$empresas = [];

if ($result->num_rows > 0) {
    // Agregar cada fila de resultado al array
    while ($row = $result->fetch_assoc()) {
        $empresas[] = $row;
    }
}

// Devolver los datos en formato JSON
echo json_encode($empresas);

// Cerrar la conexión
$conn->close();
?>