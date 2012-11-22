<?php

	$host = "";
	$user = "";
	$password = "";
	$database = "";
	$table = "";
	$acceptableDomain = "/^http:\/\/(www)?orceria\.com\.br/";

	//On IE there is no HTTP_REFERER
	if (empty($_SERVER['HTTP_REFERER']))
	{
		$_SERVER['HTTP_REFERER'] = $_SERVER['HTTP_ORIGIN'];
	}

	if (!preg_match($acceptableDomain, $_SERVER['HTTP_REFERER']))
	{
		die('Falha ao identificar o domínio');
	}

	//XDomainRequest parse post data
	if (isset($HTTP_RAW_POST_DATA))
	{
		parse_str($HTTP_RAW_POST_DATA, $_POST);
	}

	//busca os dados do form, alguns podem ser nulos
	$email = $_POST['email'];
	$name = !empty($_POST['name']) ? $_POST['name'] : null;
	$phone = !empty($_POST['phone']) ? $_POST['phone'] : null;
	$perfil = !empty($_POST['perfil']) ? $_POST['perfil'] : null;
	$field = !empty($_POST['field']) ? $_POST['field'] : null;
	$expectations = !empty($_POST['expectations']) ? $_POST['expectations'] : null;
	$personOrEntity = !empty($_POST['personorentity']) ? $_POST['personorentity'] : null;
	$suggestions = !empty($_POST['suggestions']) ? $_POST['suggestions'] : null;

	//se o email for vazio faz mais nada
	if (empty($email))
	{
		die('Email vazio');
	}

	//inicia a conexão no banco
	$con = mysql_connect($host, $user, $password);
	mysql_set_charset("UTF8", $con);

	if (!$con)
	{
		die('Could not connect: ' . mysql_error());
	}

	mysql_select_db($database, $con);

	$email = mysql_real_escape_string($email);
	$name = mysql_real_escape_string($name);
	$phone = mysql_real_escape_string($phone);
	$perfil = mysql_real_escape_string($perfil);
	$field = mysql_real_escape_string($field);
	$expectations = mysql_real_escape_string($expectations);
	$personOrEntity = mysql_real_escape_string($personOrEntity);
	$suggestions = mysql_real_escape_string($suggestions);

	//busca os dados atuais e sobreescreve se estiverem no form
	$result = mysql_query("SELECT * FROM `$table` WHERE email = '$email'");
	$jaExiste = false;

	while ($row = mysql_fetch_array($result))
	{
		$jaExiste = true;
		$name = !empty($name) ? $name : $row['name'];
		$phone = !empty($phone) ? $phone : $row['phone']; 
		$perfil = !empty($perfil) ? $perfil : $row['perfil']; 
		$field = !empty($field) ? $field : $row['field']; 
		$expectations = !empty($expectations) ? $expectations : $row['expectations'];
		$personOrEntity = !empty($personOrEntity) ? $personOrEntity : $row['personorentity'];
		$suggestions = !empty($suggestions) ? $suggestions : $row['suggestions'];
	}

	if ($jaExiste)
	{
		$sql = "UPDATE `$table`
			SET name = '$name', personorentity = '$personOrEntity', phone = '$phone', perfil = '$perfil', field = '$field', expectations = '$expectations', suggestions = '$suggestions', date = NOW()
			WHERE email = '$email'";	
	}
	else
	{
		$sql = "INSERT INTO `$table` (email, name, personorentity, phone, perfil, field, expectations, suggestions, date) 
			VALUES ('$email', '$name', '$personOrEntity', '$phone', '$perfil', '$field', '$expectations', '$suggestions', NOW())";
	}

	if (!mysql_query($sql, $con))
	{
		die('Error: ' . mysql_error());
	}

	mysql_close($con);

	echo "Ok";



