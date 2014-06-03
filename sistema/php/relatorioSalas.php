<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<title></title>
	<link rel="stylesheet" href="../css/style.css">
</head>
<body>
	<header id="cabecalho">
		<img id="bg_sistema" src="../imagens/bg_logo.jpg"/>
		<h1>Relatório de Lotação de Salas</h1>
		<table border=1 align="center" id="tabela2">
			<tr>
				<th>Sala</th>
				<th>Lotação</th>
			</tr>
		<?php
			include'conexao.php';
			$con = abrirConexao($con, $host, $user, $pswd, $dbname);

			$query = "SELECT nome FROM salas";

			$resultado = pg_query($query);
			$array = array();
			while ($lista = pg_fetch_array($resultado)){
				array_push($array, $lista['nome']);
			}

			$query = "SELECT lotacao FROM salas";

			$resultado = pg_query($query);
			$array2 = array();
			while ($lista = pg_fetch_array($resultado)){
				array_push($array2, $lista['lotacao']);
			}

			$c = 0;
			while($c < count($array)){ ?>
		<?php
				?><tr><td> <?php echo $array[$c]; ?> </td>  
		<?php 
				?><td> <?php echo $array2[$c]; ?> </tr></td>
		<?php
				$c++;
			}
			
		?>

		</table>

		<button id="botaoRelatorio" onclick="telaRelatorio2()">Voltar</button>
	</header>

	<script type="text/javascript" src="../js/trocatelas.js"></script>
</body>
</html>

