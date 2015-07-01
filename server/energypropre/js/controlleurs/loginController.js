'use strict';

app.controller('loginController', ['$scope', 'loginService', function ($scope,loginService) {
    $scope.titre = 'la page login';

    $scope.login = function (data) {
        loginService.login(data, $scope); //call login service
    };


    // $scope.logout = function () {
    //     loginService.logout();
    // }
}])