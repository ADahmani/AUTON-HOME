'use strict';

app.controller('SidebarCtrl',['$scope','weatherService','Poller','$localStorage','$state', function ($scope,weatherService,Poller,$localStorage, $state) {
    $scope.madata = Poller.data;
    $scope.content = ['INTERFACE', 'configuration'];
    $scope.weather = weatherService.getWeather($localStorage.city);

    $scope.setPage = function (page) {
        $state.transitionTo(page);
    }
    }]);
/**
 * Created by ADahmani on 31/03/2015.
 */
