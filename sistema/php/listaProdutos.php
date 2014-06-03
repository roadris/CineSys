<?php
	include'conexao.php';
	$con = abrirConexao($con, $host, $user, $pswd, $dbname);

	$info = $_GET['info'];
	$info2 = $_GET['info2'];

	if($info == "produto"){
		$query = "SELECT nome FROM produtos order by nome";

		$resultado = pg_query($query);
		$array = array();
		while ($lista = pg_fetch_array($resultado)){
			array_push($array, $lista['nome']);
		}

		if($info2 == "sala"){
			$query = "SELECT nome FROM salas  order by nome";

			$resultado = pg_query($query);
			while ($lista = pg_fetch_array($resultado)){
				array_push($array, "Ingresso ".$lista['nome']);
			}
		}

		echo json_encode($array);
	}else{
		if(!strripos($info, 'Sala')){
			$query = "SELECT quantidade FROM produtos WHERE nome = '$info'";
			$resultado = pg_fetch_row(pg_query($query));
			if((int)$resultado[0] <= 0){
				echo "Estoque esgotado!";
			}else{
				$query = "SELECT preco FROM produtos WHERE nome = '$info'";
				$resultado = pg_fetch_row(pg_query($query));
				echo $resultado[0];
			}
		}else{
			$sala = strstr($info, 'S');
			$query = "SELECT lotacao FROM salas WHERE nome = '$sala'";
			$resultado = pg_fetch_row(pg_query($query));
			if((int)$resultado[0] >= 60){
				echo "Estoque esgotado!";
			}else{
				$query = "SELECT preco FROM salas WHERE nome = '$sala'";
				$resultado = pg_fetch_row(pg_query($query));
				echo $resultado[0];
			}
		}
	}
	
?>