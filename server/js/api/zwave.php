<?php
//header('Content-Type: application/json');
        if(isset($_GET["id"])){


$url = "http://zwave.com/api/devices?id=".$_GET["id"];
//$result = curl($url); //curl($url);
//
//echo $result; // print the value of 'token'
//echo "hello";


       print($_GET["id"] . ' = 24.2');
        $json= '{"id" : "'.$_GET["id"].'", "value" : "24.32224'.$_GET["id"].'"}';
       $json = json_encode($text);
        echo $json;

        }


?>