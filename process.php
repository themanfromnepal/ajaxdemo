<?php

// Connect to a database
$conn = mysqli_connect('localhost', 'root','', 'ajaxtest');

echo 'Processing....';

// Check for POST variable
if(isset($_POST['name'])){
    $name = mysqli_real_escape_string($conn, $_POST['name']);
    // echo 'POST: The name is ' . $_POST['name'];

    $queryINSERT = "INSERT INTO users(name) VALUES('$name')";

    if(mysqli_query($conn, $queryINSERT)){
        echo ' User Added...';
    } else {
        echo 'ERROR: '.mysqli_error($conn);
    }
}
?>


