<?php
header("Access-Control-Allow-Origin: http://localhost:3000"); // Permite solicitudes desde tu app React
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");

if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    exit(0); // Salir si es una solicitud preflight
}
?>