<?php
	include'conexao.php';
	$con = abrirConexao($con, $host, $user, $pswd, $dbname);

	$id = $_GET['id'];
	$nome = $_GET['nome'];
	$user = $_GET['user'];
	$senha = $_GET['pswd'];

	$query = "UPDATE funcionarios SET nome = '$nome', login = '$user', senha = '$senha' WHERE id_Funcionario = '$id'";
	if(pg_query($query)){
		echo 1;
	}
?>