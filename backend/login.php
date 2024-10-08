<?php

include_once('server.php');

// Conexión a la base de datos
$host = "localhost";
$db_name = "BDA";
$username = "usuario";
$password = "contraseña";

try {
    $conn = new PDO("mysql:host=$host;dbname=$db_name", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    echo "Error: " . $e->getMessage();
    exit();
}

// Procesar los datos del formulario
$data = json_decode(file_get_contents("php://input"));

$usuario = $data->usuario;
$clave = $data->clave; // Contraseña ingresada por el usuario

// Generar el hash MD5 de la contraseña ingresada
$hashedPassword = md5($clave);

// Validar si el usuario existe en la base de datos
$stmt = $conn->prepare("SELECT * FROM usuarios WHERE usuario = :usuario LIMIT 1");
$stmt->bindParam(':usuario', $usuario);
$stmt->execute();
$user = $stmt->fetch(PDO::FETCH_ASSOC);

if ($user && $hashedPassword === $user['clave']) {
    echo json_encode(["message" => "Login exitoso", "status" => true]);
} else {
    echo json_encode(["message" => "Credenciales inválidas", "status" => false]);
}
?>
