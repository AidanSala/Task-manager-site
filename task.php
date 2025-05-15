<!DOCTYPE html>
<html lang="en">
  <!--Name:Sebastian Sell, Michael Abourjeili
        file name : Task.html
        date created: March 18th 2025
        This website's purpose is to be a task managment system.
        This particular page serves as the main page where users woudl use the managment system.
    -->
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="styles/pages.css">
    <script src="javascript/main.js" defer></script>
    <title>Task Managment</title>
</head>
<body>
    <?php
session_start(); 

if (empty($_SESSION['loggedin'])) {
    header("Location: index.html");
    exit();
}
?>
    <!-- Header -->
    <header>
        <h1>
            Task Managment System
        </h1>
        <!-- Navbox -->
        <nav>
            <button id="btnHome">Home Page</button>
        </nav>
    </header>
    <div class="container">
        <!--<aside class="bubbleSection">
                <div>
                    <a>+</a>
                    <a>></a>
                </div>
                <h3>sidebar</h3>
                
                <div>

                </div>
                
                <ul>
                    <li>kj</li>
                </ul>
        </aside>-->
        <div id="sidebar">
            <aside id="topbar">
                <div class="barmenu">
                    <a class="sideChange" id="info" onclick="addTask()">+</a>
                </div>
                <h3 class="sideChange" id="sidebarTitle"></h3>
                
                <div>
                    <ul class="sideChange" id="taskList">
                        <!-- <li>example</li> -->
                    </ul>
                </div>
            </aside>
            <aside id="bottombar">
                <div class="barmenu">
                </div>
                <h3 class="sideChange2" id="bottombarTitle"></h3>
                
                <div>
                    <ul class="sideChange2" id="taskBox">
                        <li><label for="tname">Task Name:</label><input id="tname"></li>
                        <li><label for="ttime">Time:</label><input id="ttime"></li>
                        <li><label for="tdesc">Description:</label><input id="tdesc"></li>
                    </ul>
                    <button id="savebtn" class="sideChange2">Save</button>
                </div>
            </aside>
        </div>
        <div class="bubbleSection display" id="content">
            <div id="board">
                <!-- Calendar goes here -->
            </div>

        </div>
    </div>
    <footer>
        <p>
            &copy;2025 Michael, Sebastian, Aidan
        </p>
    </footer>
</body>
</html>