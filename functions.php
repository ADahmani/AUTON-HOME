<?php
function read_xml($fichier,$item,$champs)
{
  if($chaine = @implode("",@file($fichier)))
  {
    $tmp = preg_split("/<\/?".$item.">/",$chaine);
    for($i=1;$i<sizeof($tmp)-1;$i+=2)
      foreach($champs as $champ)
      {
        $tmp2 = preg_split("/<\/?".$champ.">/",$tmp[$i]);
        $tmp3[$i-1][] = @$tmp2[1];
      }
      return $tmp3;
  }
}

function day_number($date)
{
  list($annee, $mois, $jour) = explode ("-", $date);
  $timestamp = mktime(0,0,0, date($mois), date($jour), date($annee));
  $njour = date("N",$timestamp);
  return $njour; 
}
?>