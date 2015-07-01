<?php
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: GET, POST');
header('Content-Type: application/json');
$json = file_get_contents('http://ipx.com/api/xdevices.json?cmd=20');
echo $json;
?>
