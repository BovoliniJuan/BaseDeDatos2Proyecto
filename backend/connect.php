<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "bda";

// Crear conexión
$conn = mysqli_connect($servername, $username, $password, $dbname);

// Verificar conexión
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
?>
