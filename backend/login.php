<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

include 'server.php';

header('Content-Type: application/json');

include 'connect.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $usuario = mysqli_real_escape_string($conn, $_POST['usuario']);
    $clave = mysqli_real_escape_string($conn, $_POST['clave']);
    
    // Hashear la contraseña usando MD5
    $hashedClave = md5($clave);

    $query = "SELECT * FROM usuarios WHERE usuario='$usuario' AND clave='$hashedClave'";
    $result = mysqli_query($conn, $query);

    if (mysqli_num_rows($result) > 0) {
        echo json_encode(['success' => true, 'message' => 'Ingreso exitoso']);
    } else {
        echo json_encode(['success' => false, 'message' => 'Usuario o clave incorrectos']);
    }
} else {
    echo json_encode(['success' => false, 'message' => 'Método de solicitud no válido']);
}

mysqli_close($conn);
?>
