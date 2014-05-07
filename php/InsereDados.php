<?php
	include'conexao.php';
	$con = abrirConexao($con, $host, $user, $pswd, $dbname);

	$nome = $_GET['nome'];
	$user = $_GET['user'];
	$senha = $_GET['pswd'];

	$query = "INSERT INTO funcionarios (nome, login, senha) VALUES ('$nome', '$user', '$senha')";
	if(pg_query($query)){
		echo 1;
	}
?>