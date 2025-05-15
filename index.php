<?php

$user = 'root';
$pass = '';
$db = 'webassignment';

// connect to the "webassignment" database
$conn = new mysqli('localhost', $user, $pass, $db);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}


if (isset($_POST['email']) && isset($_POST['password']) && isset($_POST['first_name']) && isset($_POST['last_name'])) {
    $email = htmlspecialchars($_POST['email']);
    $password = htmlspecialchars($_POST['password']);
    $first_name = htmlspecialchars($_POST['first_name']);
    $last_name = htmlspecialchars($_POST['last_name']);
    
    $sql = $conn->prepare("INSERT INTO `users` (email, password, first_name, last_name) VALUES (?, ?, ?, ?)");
    $sql->bind_param("ssss", $email, $password, $first_name, $last_name);

    $sql->execute();

}

header("Location: index.html");

?>