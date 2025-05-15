<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sign-up</title>
    <link rel="stylesheet" type="text/css" href="styles/signup-login.css">
</head>
<body>
    <div class="background-text">
        <h1>Join Task Management Today! 💚</h1>
        <ul style="list-style-type: '✅ ';">
            <li>Track your progress</li>
            <li>Set your goals</li>
            <li>Manage time easier</li>
        </ul>
    </div>

    <div class="form-container">
        <a href="index.html" id="exit">✕</a>
        <h2>Login</h2>
        <form method="post" action="login.php">
            <input type="email" placeholder="Email" name="email" required>
            <input type="password" placeholder="Password" name="password" required>
            <button type="submit">Login</button>
            <p>By logging in, you agree to our Terms of Service and Privacy Policy.</p>
        </form>
        <?php
// start the session
session_start(); 


$user = 'root';
$pass = '';
$db = 'webassignment';

// connect to the "webassignment" database
$conn = new mysqli('localhost', $user, $pass, $db);


if (isset($_POST['email']) && isset($_POST['password'])) {
    $email = htmlspecialchars($_POST['email']);
    $password = htmlspecialchars($_POST['password']);

    $stmt = $conn->prepare("SELECT password FROM users WHERE email = ?");
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $result = $stmt->get_result();
    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        
        // Check if the password matches the password in the database
        if ($password === $row['password']) { 
            $_SESSION['loggedin'] = true; 
            $_SESSION['email'] = $email;
            header("Location: task.php"); 
            exit();
        } else {
            echo "<span style='color: red;'>Invalid password. Please try again.</span>";
        }
    } else {
        echo "<span style='color: red;'>No account found with this email address.</span>";
    }
}

$conn->close();
?>
<br>
        Don't have an account? <a href="sign-up.html">Sign Up</a>
    </div>
</body>
</html>