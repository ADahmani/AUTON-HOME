<?php
//Login IPX800
//$username= »nomutilisateur »; $password= »motdepasse »;
include('functions.php');
// Paramamètrezs login BDD
$user = 'api'; $passwd = 'toor'; $host = '192.168.1.59'; $db = 'ipx800v3';
//Table 
$ipx800v3='ipx800v3';
//Lecturedu fichier XML 
$xml=read_xml('http://192.168.0.57:80/status.xml', 'response' ,array("day", "time0","count0", "count1","count2"));
foreach($xml as $row)
{
$day=$row[0]; $time0=$row[1]; $counter1=$row[2]; $counter2=$row[3]; $counter3=$row[4];
}
$date=date('Y-m-d');
mysql_connect($host,$user,$passwd) or die("erreur de connexion au serveur $host");
mysql_select_db($db) or die("erreur de connexion à la base de données");
//Transfert des données de l’IPX800 V3 dans la BDD
$parameter='counter0';
$last_date=explode('-',$date);
$last_time=explode(':',$time0);
$dateXML=mktime($last_time[0],$last_time[1],0,$last_date[1],$last_date[2],$last_date[0]);
//Date du dernier enregistrement sur les entrées analogiques dans la BDD
$request= 'SELECT id,date,time,cpt1,cpt2,cpt3 FROM counters ORDER BY id DESC LIMIT 1';
$mysql_query=mysql_query($request) or die ('Erreur SQL 0! '.$request.'<br/>'.mysql_error());
$last_record=mysql_fetch_array($mysql_query);
$dateDB=explode('-',$last_record[1]);
$timeDB=explode(':',$last_record[2]);
//Ecriture dans la BDD
$request= "INSERT INTO counters (id,date,time,cpt1,cpt2,cpt3) VALUE( $date, $time0 , $counter1 ,$counter2 ,$counter3)";
mysql_query($request) or die('Erreur SQL 1!<br>'.$sql.'<br>'.mysql_error());
mysql_close();
?>