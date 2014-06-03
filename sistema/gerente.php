<!DOCTYPE html>
<html>
	<?php
		session_start();
		if($_SESSION['estado'] != 'ativada' || $_SESSION['cargo'] != 'CHEFE'){
			header('location: index.html');
		}
	?>
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<title>CineSys-Gerente</title>
	<link rel="stylesheet" title="sistema" href="css/style.css">
	<link rel="shortcut icon" href="imagens/aba.ico" type="image/x-icon" />
</head>
<body>
	<header id="cabecalho">
		<img id="bg_sistema" src="imagens/bg_logo.jpg"/>
		<nav id="menu">
			<fieldset id="administracao" class="teste">
				<legend>Administração</legend>
				<button onclick="telaCompra()">Compra</button>
				<button onclick="telaRelatorio()">Relatórios</button>
			</fieldset>
			<fieldset id="usuario" class="teste">
				<legend>Gerenciar Usuários</legend>
				<button onclick="telaNovo()">Novo Funcionário</button>
				<button onclick="telaAtualizar()">Atualizar Funcionário</button>
			</fieldset>
			<fieldset id="outros">
				<legend>Outros</legend>
				<button onclick="sair()">Sair</button>
			</fieldset>
		</nav>
		<div id="corpo">
		</div>
	</header>
	
	<footer id="rodape">
		<p>CineSys - Desenvolvido por: Jeferson Euclides / Rodrigo Adriano - Disciplina: Laboratório de Programação 5 - Profº Edy Segura</p>
	</footer>

	<script type="text/javascript" src="js/trocatelas.js"></script>
</body>
</html>