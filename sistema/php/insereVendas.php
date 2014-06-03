<?php
	include'conexao.php';
	$con = abrirConexao($con, $host, $user, $pswd, $dbname);

	$nome = $_GET['nome'];
	$quantidade = $_GET['quantidade'];
	$preco = $_GET['preco'];
	$data = date("d/m/Y");

	$resultado = "";

	if(strripos($nome, 'Sala')){
		$sala = strstr($nome, 'S');
		$query = "SELECT (lotacao + ('$quantidade')) FROM salas WHERE nome = '$sala'";
		$result = pg_fetch_row(pg_query($query));
		
		if($result[0] <= 40){
			$sala = strstr($nome, 'S');
			$query = "UPDATE salas SET lotacao = '$quantidade' + (SELECT lotacao FROM salas WHERE nome = '$sala') WHERE nome = '$sala'";
		}else{
			$resultado = "Estoque esgotado!";
		}
	}else{
		$query = "SELECT (quantidade - ('$quantidade')) FROM produtos WHERE nome = '$nome'";
		$result = pg_fetch_row(pg_query($query));
		
		if($result[0] > 0){
			$query = "UPDATE produtos SET quantidade = (SELECT quantidade FROM produtos WHERE nome = '$nome') - '$quantidade' WHERE nome = '$nome'";
		}else{
			$resultado = "Estoque esgotado!";
		}
	}

	if($resultado != "Estoque esgotado!"){
		try {
			pg_query($query);
			$resultado = 1;
		} catch (Exception $e) {
			$resultado = $e;
		}

		if(!strripos($nome, 'Sala')){
			$query = "INSERT INTO vendas (id_produto, quantidade, data, preco) VALUES ((SELECT id_produto FROM produtos WHERE nome = '$nome'), $quantidade, '$data', $preco)";
			
			try {
				pg_query($query);
				$resultado = $resultado + 1;
			} catch (Exception $e) {
				$resultado = $resultado + $e;
			}
		}
	}

	echo $resultado;
?>