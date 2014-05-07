<?php

	$host = "localhost";
	$user = "postgres";
	$pswd = "J96914333";
	$dbname = "CineSys";
	$con = null;

	function abrirConexao($con, $host, $user, $pswd, $dbname)
	{
		$con = pg_connect("host='$host' dbname='$dbname' user='$user' password='$pswd'");
		return $con;
	}

	function fecharConexao($con)
	{
		pg_close($con);
	}

	function testarConexao($con)
	{
		if(!$con)
		{
			echo "<h3>O sistema não está conectado à  [$dbname] em [$host].</h3>";
			exit;
		}else{
			echo "<h3>O sistema está conectado à  [$dbname] em [$host].</h3>";
		}
	}
?>