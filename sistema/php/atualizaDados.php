<?php
	include'conexao.php';
	$con = abrirConexao($con, $host, $user, $pswd, $dbname);

	$nome = $_POST["nome"];
	$user = $_POST["user"];
	$senha = sha1($_POST["pswd"]);

	$query = "UPDATE funcionarios SET nome = '$nome', senha = '$senha' WHERE login = '$user'";
	
	try {
		pg_query($query);
		$resultado = true;
	} catch (Exception $e) {
		$resultado = $e;
	}

	echo $resultado;
?>