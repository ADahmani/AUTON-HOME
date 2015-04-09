'use strict';

app.controller('SidebarCtrl', function ($scope, $state) {

    $scope.content = ['home','equipements', 'configuration'];

    $scope.setPage = function (page) {
        $state.transitionTo(page);
    }
    });
/**
 * Created by ADahmani on 31/03/2015.
 */
