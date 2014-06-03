<?php
	include'conexao.php';

	session_start();
	$_SESSION['estado'] = null;
	$_SESSION['cargo'] = null;

	$con = abrirConexao($con, $host, $user, $pswd, $dbname);

	$user = $_POST["usuario"];
	$senha = sha1($_POST["senha"]);
	$query = "SELECT cargo FROM funcionarios WHERE login = '$user' and senha = '$senha'";

	$result = null;
	$result = pg_fetch_row(pg_query($query));
	
	if($result!=null){
		$_SESSION['estado'] = 'ativada';
		$_SESSION['cargo'] = $result[0];
		if($result[0] == 'CHEFE'){
			echo json_encode('gerente.php');
		}else{
			echo json_encode('funcionario.php');
		}		
	}else{
		echo "erro";
	}
?>