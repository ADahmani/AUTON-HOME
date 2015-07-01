#!/usr/bin/php -q
<?php
$user = 'root'; $passwd = 'toor'; $host = 'localhost'; $db = 'autonhome';
$json = file_get_contents('http://127.0.0.1/energypropre/js/api/ipx.php?identifs=admin:Pioupiou21&prises=14,15');
$obj = json_decode($json,true);
$lavelinge = $obj['ZWAVE']['PRISE']['14']['W'];
$lavevess = $obj['ZWAVE']['PRISE']['15']['W'];
mysql_connect($host,$user,$passwd) or die("erreur de connexion au serveur $host");
mysql_select_db($db) or die("erreur de connexion à la base de données");
//Transfert des données de l’IPX800 V3 dans la BDD

//Ecriture dans la BDD
$request= "INSERT INTO puissances (lavelinge,lavevess) VALUE( $lavelinge,$lavevess)";
mysql_query($request) or die('Erreur SQL 1!<br>'.$sql.'<br>'.mysql_error());
mysql_close();



// echo $json;
?>