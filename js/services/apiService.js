app.factory('Poller', function($http, $timeout,$localStorage) {
    var data = {"batteries":[],"weath":[], "realtime":[] ,"state":[] ,"calls": 0, "graphs" : [] };

    var poller = function() {

        //console.log('heeeeey');
        var ipx = [];
        //$http.get('http://'+$localStorage.setting.nas+'/js/api/ipx.php').then(function(r) {
        $http.get('http://'+$localStorage.setting.nas+'/api/ipx.php?identifs=admin:Pioupiou21&prises=14,15').then(function(r) {

            //console.log(r);
            data.state = r.data;
            //data.ipx = r;
        });
         // data.calls++;

        $timeout(poller, 10000);
    };



    var realtime = function() {

        //console.log('heeeeey');
        var ipx = [];
        //$http.get('http://'+$localStorage.setting.nas+'/js/api/ipx.php').then(function(r) {
        $http.get('http://'+$localStorage.setting.nas+'/api/realtime.php?identifs=admin:Pioupiou21&prises=14,15').then(function(r) {

            //console.log(r.data);
            data.realtime = r.data;
            //data.ipx = r;
        });
        // data.calls++;

        $timeout(realtime, 1000);
    };

    var batteries = function(ss,sr) {

        //$http.get('http://'+$localStorage.setting.nas+'/js/api/ipx.php').then(function(r) {
        $http.get('http://'+$localStorage.setting.nas+'/api/batteries.php?ss='+ss+'&sr='+sr).then(function(r) {

            //alert('hey'+ss+"dada: "+ sr);

            data.batteries = r.data;

        });
        //console.log('heeeeey');
        // var data = [];
        //  data.calls++;

        //$timeout(batteries, 6000);
    };

    var temperature = function() {

        //console.log('heeeeey');
        var weather = { temp: {},sun: {}, clouds: null, name:"", description:"" };
        //$http.get('http://'+$localStorage.setting.nas+'/js/api/ipx.php').then(function(r) {
        $http.get('http://localhost:8080/temp.php?city='+$localStorage.city).then(function(r) {
            //console.log(r.data);
          // var data = r.data;
            //if (data) {'+$localStorage.setting.nas+'
            //    if (data.main) {
            //        weather.temp.current = data.main.temp;
            //        weather.temp.min = data.main.temp_min;
            //        weather.temp.max = data.main.temp_max;
            //    }
            //    weather.sun.set = data.sys.set;
            //    weather.sun.rise = data.sys.rise;
            //    weather.clouds = data.clouds ? data.clouds.all : undefined;
            //    weather.name = data.name;
            //    weather.description = data.weather[0].description;
            //}
            //console.log(r.data);
            data.weath = r.data;
            //data.ipx = r;
            batteries(r.data.sys.sunset,r.data.sys.sunrise);
        });
        // data.calls++;

        $timeout(temperature, 10000);
    };





    var graphsPoll = function() {

        //console.log('heeeeey');
       // var data = [];
        //$http.get('http://'+$localStorage.setting.nas+'/js/api/ipx.php').then(function(r) {
        $http.get('http://'+$localStorage.setting.nas+'/graph.php').then(function(r) {

            //console.log(r);
            data.graphs = r.data;
            //data.ipx = r;
        });
        //  data.calls++;

        $timeout(graphsPoll, 6000);
    };
    poller();
    realtime();
    temperature();
  // graphsPoll();

    return {
        data: data
    };
});
