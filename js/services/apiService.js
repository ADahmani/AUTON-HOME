app.factory('Poller', function($http, $timeout) {
    var data = { response: {}, calls: 0, zwave : [] };

    var poller = function() {
        $http.get('js/api/api.php').then(function(r) {
            data.response = r.data;
            data.calls++;
            $timeout(poller, 3000);
        });
    };



    var pollerzwave = function() {
        data.calls++;
        var zwave = [];
        for (var b = 0; b < 3; b++) {




        $http.get('js/api/zwave.php?id='+b).then(function(r) {

            zwave.push(r.data);

        });

            }
        data.zwave = zwave;
        $timeout(pollerzwave, 500);

    };

    poller();
    pollerzwave();

    return {
        data: data
    };
});
