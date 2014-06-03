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
	<title>CineSys-Novo</title>
	<link rel="stylesheet" title="sistema" href="css/style.css">
	<link rel="shortcut icon" href="imagens/aba.ico" type="image/x-icon" />
</head>
<body>
	<header id="cabecalho">
		<img id="bg_sistema" src="imagens/bg_logo.jpg"/>
			<form id="novo" name="novo" method="POST" onSubmit="return false;">
				<label>
					Nome: <input type="text" id="nome" placeholder="Digite o nome" required="required" autofocus onblur="validacao('nome')"/>
					<span id="span_nome"></span>
				</label>

				<label>
					Usuario: <input type="text" id="usuario" placeholder="Digite o usuário" required="required" />
					<span id="span_usuario"></span>
				</label>

				<label>
					Senha: <input type="password" id="senha" placeholder="Digite a senha" required="required" />
					<span id="span_senha"></span>
				</label>

				<input type="submit" value="Salvar" onclick="insereDados(ajaxRequest)">
				<input type="reset" value="Limpar">
				<input type="button" onclick="voltaTelaG()" value="Voltar">

				<div id="resposta"></div>
			</form>
	</header>

	<footer id="rodape">
		<p>CineSys - Desenvolvido por: Jeferson Euclides / Rodrigo Adriano - Disciplina: Laboratório de Programação 5 - Profº Edy Segura</p>
	</footer>
	
	<script type="text/javascript" src="js/ajax.js"></script>
	<script type="text/javascript" src="js/validacoes.js"></script>
	<script type="text/javascript" src="js/trocatelas.js"></script>
</body>
</html>