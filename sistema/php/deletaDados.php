<?php
	include'conexao.php';
	$con = abrirConexao($con, $host, $user, $pswd, $dbname);

	$login = $_GET['login'];

	$query = "UPDATE funcionarios SET status = 'DESATIVADO' WHERE login = '$login'";

	try {
		pg_query($query);
		$resultado = true;
	} catch (Exception $e) {
		$resultado = $e;
	}

	echo $resultado;
?>