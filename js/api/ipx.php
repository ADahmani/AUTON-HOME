<?php
header("Access-Control-Allow-Origin: *");
header('Content-Type: application/json');

class Data {
    public $IPX = array('OUT'=>array(),'ANALOG'=>array());
    public $CONSO= array();

}
$prise = explode(",", $_GET["prises"]);
$identifs = $_GET["identifs"];
$mydata = new Data();

try {
    $ipx_outs = @file_get_contents('ipx.com/api/xdevices.json?cmd=20');
    $ipx_analogs = @file_get_contents('ipx.com/api/xdevices.json?cmd=30');
    $mydata->IPX['OUT'] = json_decode($ipx_outs,true);
    $mydata->IPX['ANALOG']  = json_decode($ipx_analogs,true);
} catch (Exception $e) {
   $mydata->IPX['OUT'] = '';
   $mydata->IPX['ANALOG']  = '';
}

//$mydata = new Data();


//for($i=0 ; $i<count($prise);$i++){
//$value = file_get_contents("http://$identifs@zwave.com/api/devices?id=$prise[$i]");
//$decoded = json_decode($value);
//$mydata->ZWAVE['PRISE'][$prise[$i]] = array('W'=>$decoded->properties->valueSensor,'kWh'=>$decoded->properties->valueMeter);
//}
//
//for($i; count($prise);$i++){
//
//$value = @file_get_contents("$identifs@zwave.com/api/devices?id=$prise[$i]");
//$decoded = json_decode($value);
//$mydata->ZWAVE['PRISE'][$prise[$i]] = array
//
//}

$value = @file_get_contents("http://192.168.1.106/kw_b.php");
$decoded = json_decode($value);
$mydata->CONSO = $decoded;
//$json = file_get_contents('http://ipx.com/api/xdevices.json?cmd=20');
//echo $json;


//---
//$a1 = json_decode( $mydata->IPX, true );
//$a2 = json_decode( $mydata->ZWAVE, true );
//
//$res = array_merge_recursive( $a1, $a2 );
//---
$resJson = json_encode( $mydata );

echo $resJson;