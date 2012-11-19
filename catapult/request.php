<?php

	$host = "";
	$user = "";
	$password = "";
	$database = "";
	$table = "";
	$isAjax = false;

	if (
		isset($_SERVER['HTTP_X_REQUESTED_WITH']) 
		&& !empty($_SERVER['HTTP_X_REQUESTED_WITH']) 
		&& strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest'
	) 
	{
		$isAjax = true;
	}
	echo 'Is Ajax? ';
	echo $isAjax ? 'sim' : 'não' ;
	echo '<br>';


	$con = mysql_connect($host, $user, $password);
	mysql_set_charset("UTF8", $con);

	if (!$con)
	{
		die('Could not connect: ' . mysql_error());
	}

	mysql_select_db($database, $con);

	//busca os dados do form, alguns podem ser nulos
	$email = $_POST['email'];
	$name = !empty($_POST['name']) ? $_POST['name'] : null;
	$phone = !empty($_POST['phone']) ? $_POST['phone'] : null;
	$perfil = !empty($_POST['perfil']) ? $_POST['perfil'] : null;
	$field = !empty($_POST['field']) ? $_POST['field'] : null;
	$expectations = !empty($_POST['expectations']) ? $_POST['expectations'] : null;
	$personOrEntity = !empty($_POST['personorentity']) ? $_POST['personorentity'] : null;
	$suggestions = !empty($_POST['suggestions']) ? $_POST['suggestions'] : null;

	echo "Buscando dados do form <br>";
	echo $email; echo "<br>";
	echo $name; echo "<br>";
	echo $phone; echo "<br>";
	echo $perfil; echo "<br>";
	echo $field; echo "<br>";
	echo $expectations; echo "<br>";
	echo $personOrEntity; echo "<br>";
	echo $suggestions; echo "<br>";
	echo "<br>";

	$email = mysql_real_escape_string($email);
	$name = mysql_real_escape_string($name);
	$phone = mysql_real_escape_string($phone);
	$perfil = mysql_real_escape_string($perfil);
	$field = mysql_real_escape_string($field);
	$expectations = mysql_real_escape_string($expectations);
	$personOrEntity = mysql_real_escape_string($personOrEntity);
	$suggestions = mysql_real_escape_string($suggestions);

	echo "Buscando dados do form REAL ESCAPE<br>";
	echo $email; echo "<br>";
	echo $name; echo "<br>";
	echo $phone; echo "<br>";
	echo $perfil; echo "<br>";
	echo $field; echo "<br>";
	echo $expectations; echo "<br>";
	echo $personOrEntity; echo "<br>";
	echo $suggestions; echo "<br>";
	echo "<br>";

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

	echo "Atualizando com os dados do banco <br>";
	echo $jaExiste."<br>";
	echo $email."<br>";
	echo $name."<br>";
	echo $phone."<br>";
	echo $perfil."<br>";
	echo $field."<br>";
	echo $expectations."<br>";
	echo $personOrEntity."<br>";
	echo $suggestions."<br>";
	echo "<br>";

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

	echo "sql:<br>";
	echo $sql;
	echo "<br>";

	if (!mysql_query($sql, $con))
	{
		die('Error: ' . mysql_error());
	}

	mysql_close($con);



