<?php
	session_start();
	if($_SESSION['estado'] == 'ativada'){
		echo $_SESSION['nome'];
	}else{
		echo 1;
	}	
?>