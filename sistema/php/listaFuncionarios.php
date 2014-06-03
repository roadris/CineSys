<?php
	include'conexao.php';
	$con = abrirConexao($con, $host, $user, $pswd, $dbname);

	$info = $_GET['info'];
	if($info == "funcionario"){
		$query = "SELECT login FROM funcionarios WHERE status = 'ATIVADO'";

		$resultado = pg_query($query);
		$array = array();
		while ($lista = pg_fetch_array($resultado)){
			array_push($array, $lista['login']);
		}
		echo json_encode($array);
	}else{
		$query = "SELECT nome FROM funcionarios WHERE login = '$info'";

		$resultado = pg_query($query);
		$nome = pg_fetch_row($resultado);
		echo json_encode($nome);
	}
?>