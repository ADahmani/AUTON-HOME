<?php

//foreach($xml->children() as $state)
                   //{
                   //    $states[]= array('state' => (string)$state->name);
                   //}
                   //echo json_encode($states);
                   //
                   //echo time()*1000;
        $json ="a";
//        $fileContents= file_get_contents("http://www.ipx.com/status.xml");
//        $fileContents = str_replace(array("\n", "\r", "\t"), '', $fileContents);
//        $fileContents = trim(str_replace('"', "'", $fileContents));
//        $simpleXml = simplexml_load_string($fileContents);
        $json = json_encode($simpleXml);
        echo $json;


?>