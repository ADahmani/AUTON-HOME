'use strict';
app.factory('loginService',function($http, $location, sessionService){
	return{
		login:function(data,scope){
			var $promise=$http.post('js/api/user.php',data); //envois data vers user.php
			$promise.then(function(msg){
				
				var reponse = msg.data;
				scope.msgtxt = reponse;
				//console.log(reponse);
				if(reponse == "sucess"){
					//scope.msgtxt='information correct';
					sessionService.set('user',reponse);
					$location.path('/home');
				}	       
				else  {
				//	scope.msgtxt='information incorrect';
					$location.path('/login');
				}				   
			});
		},
		logout:function(){
			sessionService.destroy('user');
			$location.path('/login');
		},
		islogged:function(){
		
			
			if(sessionService.get('user')) return true;
			else return false;
			
		}
	}

});