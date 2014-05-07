<?php
	include'conexao.php';
	$con = abrirConexao($con, $host, $user, $pswd, $dbname);

	$id = $_GET['id'];

	$query = "DELETE FROM funcionarios WHERE id_Funcionario = '$id'";
	if(pg_query($query)){
		echo 1;
	}
?>