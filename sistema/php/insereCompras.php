<?php
	include'conexao.php';
	$con = abrirConexao($con, $host, $user, $pswd, $dbname);

	$nome = $_GET['nome'];
	$quantidade = $_GET['quantidade'];
	$preco = $_GET['preco'];
	$data = $_GET['data'];

	$query = "UPDATE produtos SET quantidade = '$quantidade' + (SELECT quantidade FROM produtos WHERE nome = '$nome'), preco = $preco WHERE nome = '$nome'";

	try {
		pg_query($query);
		$resultado = 1;
	} catch (Exception $e) {
		$resultado = $e;
	}

	$query = "INSERT INTO compras (id_produto, quantidade, data, preco) VALUES ((SELECT id_produto FROM produtos WHERE nome = '$nome'), $quantidade, '$data', $preco)";
		
	try {
		pg_query($query);
		$resultado = $resultado + 1;
	} catch (Exception $e) {
		$resultado = $resultado + $e;
	}
	
	echo $resultado;
?>