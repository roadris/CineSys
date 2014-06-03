<!DOCTYPE html>
<html>
<head>
	<?php
		session_start();
		if($_SESSION['estado'] != 'ativada' || $_SESSION['cargo'] != 'CHEFE'){
			header('location: index.html');
		}
	?>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<title>CineSys-Funcionário</title>
	<link rel="stylesheet" title="sistema" href="css/style.css">
	<link rel="shortcut icon" href="imagens/aba.ico" type="image/x-icon" />
</head>
<body>
	<header id="cabecalho">
		<img id="bg_sistema" src="imagens/bg_logo.jpg"/>

		<nav id="menu">
			<fieldset id="produtos">
				<legend>Produtos</legend>
				<button onclick="mostraRelatorio('relatorioProdutos')">Produtos e quantidade</button>
			</fieldset>

			<fieldset id="salas">
				<legend>Salas</legend>
					<button onclick="mostraRelatorio('relatorioSalas')">Lotação das Salas</button>
			</fieldset>

			<fieldset id="outros">
				<legend>Outros</legend>
				<button onclick="voltaTelaG()">Voltar</button>
			</fieldset>
		</nav>
	</header>
	<div id="corpo">

	</div>

	<footer id="rodape">
		<p>CineSys - Desenvolvido por: Jeferson Euclides / Rodrigo Adriano - Disciplina: Laboratório de Programação 5 - Profº Edy Segura</p>
	</footer>

	<script type="text/javascript" src="js/trocatelas.js"></script>
</body>
</html>