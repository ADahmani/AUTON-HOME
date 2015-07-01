app.factory('Poller', function($http, $timeout,$localStorage) {
    var data = { "ipx":[] ,"calls": 0, "zwave" : [] };

    var poller = function() {

        //console.log('heeeeey');
        var ipx = [];
        //$http.get('http://'+$localStorage.setting.nas+'/js/api/ipx.php').then(function(r) {
        $http.get('js/api/ipx.php').then(function(r) {

            //console.log(r);
            data.ipx = r.data;
            //data.ipx = r;
        });
        //  data.calls++;

        $timeout(poller, 300);
    };



    var pollerzwave = function() {
        data.calls++;
        var zwave = [];
        for (var b = 13; b < 14; b++) {




        $http.jsonp('http://'+$localStorage.setting.zwave.user+':'+$localStorage.setting.zwave.password+'@'+$localStorage.setting.zwave.ip+'/api/devices?id='+b).then(function(r) {

            console.log(r.data);
            zwave.push(r.data);

        });

            }
        data.zwave = zwave;
        $timeout(pollerzwave, 500);

    };
   poller();
  //pollerzwave();

    return {
        data: data
    };
});
