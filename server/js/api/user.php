<?php 
	$user=json_decode(file_get_contents('php://input'));  //get user from 
	if($user->mail== "ok" && $user->pass== "ok") {
		print "sucess";
	}
	else{
		print "error";
	}
?>
