

<?php
header("Access-Control-Allow-Origin: *");
header('Content-Type: application/json');


    $user_name = "root";
    $password = "toor";
    $database = "autonhome";
    $server = "localhost";

$db_handle = mysql_connect($server, $user_name, $password);
$db_found = mysql_select_db($database, $db_handle);

if ($db_found) {

$SQL = "SELECT UNIX_TIMESTAMP(`timestamp`)*1000 AS TIMESTAMP, (`ond1`+`ond2`) AS PROD, ( `lavelinge` +  `lavevess` + `chauffeau` + `chauffage` + `four` +`sechelinge`) AS CONSO FROM  `puissances` WHERE `timestamp` >= NOW() - INTERVAL 1 YEAR ORDER BY `timestamp` ASC";
$result = mysql_query($SQL);

 class DATA  
 {
 	public $TIMESTAMP = array();
	public $CONSO = array();
	public $PROD = array();
 	
 } 
$data = new DATA();
$tempArray = array();

// Loop through each row in the result set
while($row = mysql_fetch_assoc($result))
{
	array_push($data->TIMESTAMP,$row['TIMESTAMP']);
	array_push($data->CONSO,$row['CONSO']);
	array_push($data->PROD,$row['PROD']);
    // $tempArray = $row;
    // array_push($resultArray, $tempArray);
}

mysql_close($db_handle);
echo json_encode($data,JSON_NUMERIC_CHECK);



}
?>
