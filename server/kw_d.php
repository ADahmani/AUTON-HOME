<?php
header("Access-Control-Allow-Origin: *");
header('Content-Type: application/json');

class KW {
    public $lavelinge;
    public $lavevess;
    public $chauffeau ;
    public $chauffage ;
    public $four;
	public $sechelinge ;
	public $ond1 ;
	public $ond2 ;
	public $chargeGW ;
	public $chargeBS ;
}
$kw = new KW();
    $user_name = "root";
    $password = "toor";
    $database = "autonhome";
    $server = "localhost";
    $db_handle = mysql_connect($server, $user_name, $password);
    $db_found = mysql_select_db($database, $db_handle);
if ($db_found) {

$SQL = "SELECT sum(`lavelinge`) as lavelinge, sum(`lavevess`) as lavevess ,sum(`chauffeau`) as chauffeau ,sum(`chauffage`) as chauffage ,sum(`four`) as four ,sum(`sechelinge`) as sechelinge ,sum(`ond1`) as ond1 ,sum(`ond2`) as ond2,sum(`chargeGW`) as chargeGW ,sum(`chargeBS`) as chargeBS FROM (SELECT * FROM `puissances` WHERE timestamp >= NOW() - INTERVAL 1 DAY ORDER BY timestamp DESC) t1";
$result = mysql_query($SQL);
$row = mysql_fetch_assoc($result); 
$kw->lavelinge['kwj'] =  round(($row['lavelinge'] / 60 )/1000,2);
$kw->lavevess['kwj'] =  round(($row['lavevess'] / 60 )/1000,2);
$kw->chauffeau['kwj'] =  round(($row['chauffeau'] / 60 )/1000,2);
$kw->chauffage['kwj']=  round(($row['chauffage'] / 60 )/1000,2);
$kw->four['kwj']=  round(($row['four'] / 60 )/1000,2);
$kw->sechelinge['kwj']=  round(($row['sechelinge'] / 60 )/1000,2);
$kw->ond1['kwj']=  round(($row['ond1'] / 60 )/1000,2);
$kw->ond2['kwj']=  round(($row['ond2'] / 60 )/1000,2);
$kw->chargeGW['kwj']=  round(($row['chargeGW'] / 60 )/1000,2);
$kw->chargeBS['kwj']=  round(($row['chargeBS'] / 60 )/1000,2);

$SQL = "SELECT sum(`lavelinge`) as lavelinge, sum(`lavevess`) as lavevess ,sum(`chauffeau`) as chauffeau ,sum(`chauffage`) as chauffage ,sum(`four`) as four ,sum(`sechelinge`) as sechelinge ,sum(`ond1`) as ond1 ,sum(`ond2`) as ond2,sum(`chargeGW`) as chargeGW ,sum(`chargeBS`) as chargeBS FROM (SELECT * FROM `puissances` WHERE timestamp >= NOW() - INTERVAL 1 HOUR ORDER BY timestamp DESC) t1";

$result = mysql_query($SQL);
$row = mysql_fetch_assoc($result); 
//$kwj = round(($row['lavelinge'] / 1220 )/1000,2);
$kw->lavelinge['kwh'] =  round(($row['lavelinge'] / 60 )/1000,2);
$kw->lavevess['kwh'] =  round(($row['lavevess'] / 60 )/1000,2);
$kw->chauffeau['kwh'] =  round(($row['chauffeau'] / 60 )/1000,2);
$kw->chauffage['kwh']=  round(($row['chauffage'] / 60 )/1000,2);
$kw->four['kwh']=  round(($row['four'] / 60 )/1000,2);
$kw->sechelinge['kwh']=  round(($row['sechelinge'] / 60 )/1000,2);
$kw->ond1['kwh']=  round(($row['ond1'] / 60 )/1000,2);
$kw->ond2['kwh']=  round(($row['ond2'] / 60 )/1000,2);
$kw->chargeGW['kwh']=  round(($row['chargeGW'] / 60 )/1000,2);
$kw->chargeBS['kwh']=  round(($row['chargeBS'] / 60 )/1000,2);


$SQL = "SELECT sum(`lavelinge`) as lavelinge, sum(`lavevess`) as lavevess ,sum(`chauffeau`) as chauffeau ,sum(`chauffage`) as chauffage ,sum(`four`) as four ,sum(`sechelinge`) as sechelinge ,sum(`ond1`) as ond1 ,sum(`ond2`) as ond2,sum(`chargeGW`) as chargeGW ,sum(`chargeBS`) as chargeBS FROM (SELECT * FROM `puissances` WHERE timestamp >= NOW() - INTERVAL 1 YEAR ORDER BY timestamp DESC) t1";

$result = mysql_query($SQL);
$row = mysql_fetch_assoc($result); 
//$kwj = round(($row['lavelinge'] / 1220 )/1000,2);
$kw->lavelinge['kwa'] =  round(($row['lavelinge'] / 60 )/1000,2);
$kw->lavevess['kwa'] =  round(($row['lavevess'] / 60 )/1000,2);
$kw->chauffeau['kwa'] =  round(($row['chauffeau'] / 60 )/1000,2);
$kw->chauffage['kwa']=  round(($row['chauffage'] / 60 )/1000,2);
$kw->four['kwa']=  round(($row['four'] / 60 )/1000,2);
$kw->sechelinge['kwa']=  round(($row['sechelinge'] / 60 )/1000,2);
$kw->ond1['kwa']=  round(($row['ond1'] / 60 )/1000,2);
$kw->ond2['kwa']=  round(($row['ond2'] / 60 )/1000,2);
$kw->chargeGW['kwa']=  round(($row['chargeGW'] / 60 )/1000,2);
$kw->chargeBS['kwa']=  round(($row['chargeBS'] / 60 )/1000,2);

$SQL = "SELECT sum(`lavelinge`) as lavelinge, sum(`lavevess`) as lavevess ,sum(`chauffeau`) as chauffeau ,sum(`chauffage`) as chauffage ,sum(`four`) as four ,sum(`sechelinge`) as sechelinge ,sum(`ond1`) as ond1 ,sum(`ond2`) as ond2,sum(`chargeGW`) as chargeGW ,sum(`chargeBS`) as chargeBS FROM (SELECT * FROM `puissances` WHERE timestamp >= NOW() - INTERVAL 30 DAYS ORDER BY timestamp DESC) t1";

$result = mysql_query($SQL);
$row = mysql_fetch_assoc($result); 
//$kwj = round(($row['lavelinge'] / 1220 )/1000,2);
$kw->lavelinge['kwm'] =  round(($row['lavelinge'] / 60 )/1000,2);
$kw->lavevess['kwm'] =  round(($row['lavevess'] / 60 )/1000,2);
$kw->chauffeau['kwm'] =  round(($row['chauffeau'] / 60 )/1000,2);
$kw->chauffage['kwm']=  round(($row['chauffage'] / 60 )/1000,2);
$kw->four['kwm']=  round(($row['four'] / 60 )/1000,2);
$kw->sechelinge['kwm']=  round(($row['sechelinge'] / 60 )/1000,2);
$kw->ond1['kwm']=  round(($row['ond1'] / 60 )/1000,2);
$kw->ond2['kwm']=  round(($row['ond2'] / 60 )/1000,2);
$kw->chargeGW['kwm']=  round(($row['chargeGW'] / 60 )/1000,2);
$kw->chargeBS['kwm']=  round(($row['chargeBS'] / 60 )/1000,2);



$SQL ="SELECT * FROM  `puissances` ORDER BY  `timestamp` DESC LIMIT 1";
$result = mysql_query($SQL);
$row = mysql_fetch_assoc($result); 


$kw->lavelinge['W'] =  $row['lavelinge'];
$kw->lavevess['W'] =  $row['lavevess'];
$kw->chauffeau['W'] =  $row['chauffeau'];
$kw->chauffage['W']=  $row['chauffage'];
$kw->four['W']=  $row['four'];
$kw->sechelinge['W']=  $row['sechelinge'];
$kw->ond1['W']=  $row['ond1'];
$kw->ond2['W']=  $row['ond2'];
$kw->chargeGW['W']=  $row['chargeGW'];
$kw->chargeBS['W']=  $row['chargeBS'];


mysql_close($db_handle);
$resJson = json_encode( $kw );
echo $resJson;
}

?>
