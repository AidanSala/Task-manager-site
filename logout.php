<!--Name:Sebastian Sell, Aidan Salagala, Michael Abourjeili
        file name: logout.php
        date: 2025-04-08
        description: This file handles the logout process by destroying the session and redirecting to the index page.
    -->
<?php
// resume the session
session_start();
// clears the session variables
session_unset(); 
// destroys the session
session_destroy();
// redirects to the index page
header("Location: index.html");
?>
