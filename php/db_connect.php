<?php
	$con = mysqli_connect("localhost","root","q","rhel_portal");
	if ($con->connect_error) { 
		die("Connection failed: " . $con->connect_error); 
	}
?>
