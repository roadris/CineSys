<?php
	include'conexao.php';
	$con = abrirConexao($con, $host, $user, $pswd, $dbname);

	$nome = $_POST["nome"];
	$user = $_POST["user"];
	$senha = sha1($_POST["pswd"]);

	$query = "INSERT INTO funcionarios (nome, login, senha, status, cargo) VALUES ('$nome', '$user', '$senha', 'ATIVADO', 'FUNCIONARIO')";
	
	try {
		pg_query($query);
		$resultado = true;
	} catch (Exception $e) {
		$resultado = $e;
	}

	echo $resultado;
?>