<?php

//foreach($xml->children() as $state)
                   //{
                   //    $states[]= array('state' => (string)$state->name);
                   //}
                   //echo json_encode($states);
                   //
                   //echo time()*1000;
//        $json ="a";
//http://192.168.1.xx/api/xdevices.json?cmd=10 pour les entrées numériques
//http://192.168.1.75/api/xdevices.json?cmd=20 pour les sorties relais
//http://192.168.1.75/api/xdevices.json?cmd=30 pour les entrées analogiques
//http://192.168.1.75/api/xdevices.json?cmd=40 pour les compteurs



        // $fileContents= file_get_contents("http://www.ipx.com/status.xml");
        // $fileContents = str_replace(array("\n", "\r", "\t"), '', $fileContents);
        // $fileContents = trim(str_replace('"', "'", $fileContents));
        // $simpleXml = simplexml_load_string($fileContents);
        // $json = json_encode($simpleXml);
        // echo $json;


$today = strftime("%B %d %G %R"); 
echo $today;

?>