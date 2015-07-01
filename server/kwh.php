

<?php

    $user_name = "root";
    $password = "toor";
    $database = "autonhome";
    $server = "localhost";

$db_handle = mysql_connect($server, $user_name, $password);
$db_found = mysql_select_db($database, $db_handle);

if ($db_found) {

// $SQL = "SELECT sum(lavelinge) AS kwh FROM (SELECT lavelinge FROM `puissances` WHERE timestamp >= NOW() - INTERVAL 1 HOUR ORDER BY timestamp DESC) t1";
$SQL = "SELECT sum(`lavelinge`) as lavelinge, sum(`lavevess`) as lavevess ,sum(`chauffeau`) as chauffeau ,sum(`chauffage`) as chauffage ,sum(`four`) as four ,sum(`sechelinge`) as sechelinge ,sum(`ond1`) as ond1 ,sum(`ond2`) as ond2,sum(`chargeGW`) as chargeGW ,sum(`chargeBS`) as chargeBS FROM (SELECT * FROM `puissances` WHERE timestamp >= NOW() - INTERVAL 1 HOUR ORDER BY timestamp DESC) t1";
$result = mysql_query($SQL);
$row = mysql_fetch_assoc($result); 
$kwh = round(($row['lavelinge'] / 60 )/1000,4) ;
mysql_close($db_handle);
echo $kwh;
}

?>
<!-- 
INSERT INTO `test`.`contacts` (`ID`, `First_Name`, `Surname`, `Address`) VALUES ('1', 'achraf', 'dahmani', '12 avenu'); -->