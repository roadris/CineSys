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
	<title>CineSys-Atualizar</title>
	<link rel="stylesheet" title="sistema" href="css/style.css">
	<link rel="shortcut icon" href="imagens/aba.ico" type="image/x-icon" />

</head>
<body>
	<header id="cabecalho">
		<img id="bg_sistema" src="imagens/bg_logo.jpg"/>
			<form id="atualizar" name="atualizar" method="POST" onSubmit="return false;">
				<label>
					Selecionar: <select name="att" id="selectAtualizar" onchange="preencheCampos(ajaxRequest2)">
						<option value="" id="optionPadrao">--Carregando--</option>
					</select>
				</label>

				<label>
					Nome: <input type="text" id="nome" required="required"/>
					<span id="span_nome"></span>
				</label>

				<label>
					Usuario: <input type="text" id="usuario" disabled="disabled"/>
					<span id="span_usuario"></span>
				</label>

				<label>
					Senha: <input type="password" id="senha" required="required"/>
					<span id="span_senha"></span>
				</label>

				<input type="reset" value="Limpar">
				<input type="submit" value="Atualizar" id="botao" onclick="atualizaDados(ajaxRequest)">
				<input type="submit" value="Deletar" onclick="deletaDados(ajaxRequest)"></br>
				<input type="button" onclick="voltaTelaG()" value="Voltar"></br>
				<span id="resposta"></span>
			</form>
	</header>

	<footer id="rodape">
		<p>CineSys - Desenvolvido por: Jeferson Euclides / Rodrigo Adriano - Disciplina: Laboratório de Programação 5 - Profº Edy Segura</p>
	</footer>
	
	<script type="text/javascript" src="js/ajax.js"></script>
	<script type="text/javascript" src="js/ajax2.js"></script>
	<script type="text/javascript" src="js/trocatelas.js"></script>
	<script type="text/javascript" src="js/validacoes.js"></script>
</body>
</html>