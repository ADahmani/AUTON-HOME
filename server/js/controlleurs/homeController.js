'use strict';

app.controller('homeController', ['$scope', 'weatherService','Poller','$localStorage','$http', function ($scope,weatherService,Poller,$localStorage,$http) {
    $scope.setting = $localStorage.setting;


    //$scope.logout = function () {
    //    loginService.logout();
    //}
  //
   $scope.sorties = ["response"];



    $scope.sorties = Poller.data;

   // console.log(Poller.data.ipx);
  //  console.log(Poller.data);
   // $scope.eqpstat = [];
    //$scope.eqpstat['product'] = Poller.data.ipx.product;
    //for(var i= 0 ; i<33 ; i++){
    //
    //}
    for (var obj in $scope.sorties.ipx) {
        console.log(obj);

    }
    $scope.eqpstat = $scope.sorties;

  // console.log($scope.eqpstat.product);
   //
    $scope.ChangeCity = function(city){
        var result = weatherService.getWeather(city);
        $scope.weather = result;

        $localStorage.city = city;
        };

    //$scope.IpSetting = function(setting){
    //
    //    $localStorage.setting = setting;
    //
    //
    //};




        //console.log($scope.setting);

        $scope.weather = weatherService.getWeather($localStorage.city);

    $scope.selecteqp = function(eqp){

        if($scope.eqpstat[eqp]==1){
            $scope.eqpstat[eqp]=0;
        }else{
            $scope.eqpstat[eqp]=1;
        }
//valueSensor

        $http.get('http://'+$scope.setting.ipx+'/leds.cgi?led='+eqp).success(function(data) {
            if (data) {

                $scope.eqpstat[eqp]= !$scope.eqpstat[eqp];

            }
        });

    }


    $scope.selectplug = function(id){

        if($scope.eqpstat[id]==1){
            $scope.eqpstat[id]=0;
            $http.jsonp('http://'+$scope.setting.zwave.user+':'+$scope.setting.zwave.password+'@'+$scope.setting.zwave.ip+'/api/callAction?deviceID='+id+'&name=turnOff').success(function(data) {
                if (data) {

                    $scope.eqpstat[id]= !$scope.eqpstat[id];

                }
            });
    }else{
        $scope.eqpstat[id]=1;
            $http.jsonp('http://'+$scope.setting.zwave.user+':'+$scope.setting.zwave.password+'@'+$scope.setting.zwave.ip+'/api/callAction?deviceID='+id+'&name=turnOn').success(function(data) {
                if (data) {

                    $scope.eqpstat[id]= !$scope.eqpstat[id];


                }
            });
    }
//valueSensor
//        $http.get('http://192.168.1.251/api/callAction?deviceID='+eqp+'&name=turnOff').success(function(data) {
//            if (data) {
//
//                $scope.eqpstat[eqp]= !$scope.eqpstat[eqp];
//
//            }
//        });

    }



}]);
