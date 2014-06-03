<?php
	session_start();
	$_SESSION['estado'] = null;
	$_SESSION['cargo'] = null;

	header('location: ../index.html');
?>