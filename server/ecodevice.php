<?php
		header('Content-Type: application/json');
        require "config.php";
		class Dataa {
			public $conso = array();
			public $prod = array();	
		} 
		$DATA = new dataa();

		$fileContents= @file_get_contents("http://$ecodevice/protect/settings/teleinfo1.xml");
        $fileContents = str_replace(array("\n", "\r", "\t"), '', $fileContents);
        $fileContents = trim(str_replace('"', "'", $fileContents));
        $simpleXml = simplexml_load_string($fileContents);
       // $json = json_encode($simpleXml);
        $DATA->conso =$simpleXml; 
		$fileContents = @file_get_contents("http://$ecodevice/protect/settings/teleinfo2.xml");
		$fileContents = str_replace(array("\n", "\r", "\t"), '', $fileContents);
        $fileContents = trim(str_replace('"', "'", $fileContents));
        $simpleXml = simplexml_load_string($fileContents);
        //$json = json_encode($simpleXml);
        $DATA->prod = $simpleXml; 
        echo json_encode($DATA);



// $string_data = "http://192.168.1.103/protect/settings/teleinfo1.xml";
// $xml1 = simplexml_load_string(file_get_contents($string_data));
// $string_data2 = "http://192.168.1.103/protect/settings/teleinfo2.xml";
// $xml2 = simplexml_load_string(file_get_contents($string_data2));
// $T1_PPAP = (string) $xml1->T1_PPAP;
// $longitude = (string) $xml2->T2_PPAP;
// echo $T1_PPAP.' -- '.$longitude;

?>

