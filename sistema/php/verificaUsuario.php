<?php
	include 'conexao.php';
	
	$con = abrirConexao($con, $host, $user, $pswd, $dbname);

	$user = $_GET['user'];

	$query = "SELECT login FROM funcionarios WHERE login = '$user'";
	$result = pg_fetch_row(pg_query($query));
	if($result[0] == $user && $result[0] != ""){
		echo "Usuário já existente ou indisponivel";
	}else{
		echo "Usuário disponivel";
	}
?>