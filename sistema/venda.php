<!DOCTYPE html>
<html>
<head>
	<?php
		session_start();
		if($_SESSION['estado'] != 'ativada' || $_SESSION['cargo'] != 'FUNCIONARIO'){
			header('location: index.html');
		}
	?>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<title>CineSys-Venda</title>
	<link rel="stylesheet" title="sistema" href="css/style.css">
	<link rel="shortcut icon" href="imagens/aba.ico" type="image/x-icon" />
</head>
<body>
	<header id="cabecalho">
		<img id="bg_sistema" src="imagens/bg_logo.jpg"/>
			<form id="venda" name="venda" method="POST" onSubmit="return false;">
				<label>
					Produto: <select name="prod" id="selectAtualizar" onchange="retornaPreco(ajaxRequest3)">
						<option value="" id ="optionPadrao">--Carregando--</option>
					</select>
					<span id="span_produto"></span>
				</label>

				<label>
					Quantidade: <input type="number" id="quantidade" onblur="calculoPreco()"/>
					<span id="span_quantidade"></span>
				</label>

				<label>
					Preço: <input type="text" id="preco" disabled="disabled" />
					<span id="span_preco"></span>
				</label>

				<label>
					Total: <input type="text" id="total" disabled="disabled" />
					<span id="span_preco"></span>
				</label>

				<input type="submit" value="Concluir" id="botao" onclick="novaVenda(ajaxRequest)">
				<input type="reset" value="Limpar">
				<input type="button" onclick="voltaTelaF()" value="Voltar">

				<div id="resposta"></div>					
			</form>
	</header>

	<footer id="rodape">
		<p>CineSys - Desenvolvido por: Jeferson Euclides / Rodrigo Adriano - Disciplina: Laboratório de Programação 5 - Profº Edy Segura</p>
	</footer>

	<script type="text/javascript" src="js/ajax.js"></script>
	<script type="text/javascript" src="js/ajax3.js"></script>
	<script type="text/javascript" src="js/validacoes.js"></script>	
	<script type="text/javascript" src="js/trocatelas.js"></script>	
</body>
</html>