<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Credentials: true");
header('Content-Type: application/json');

session_start();

include '../server.php';
include '../connect.php';

if (!isset($_SESSION['usuario'])) {
    echo json_encode(['success' => false, 'message' => 'No autorizado']);
    exit;
}

// Si la sesión está activa
echo json_encode(['success' => true, 'message' => 'Sesión activa']);
$conn->close();
?>
