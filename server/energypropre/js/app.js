'use strict';

var app = angular.module('ghita', ['ui.router','ngStorage']);
app.config(['$stateProvider', function ($stateProvider) {
   // $stateProvider.when('/home', {templateUrl: 'js/vues/home.html', controller: 'homeController'});
  //  $stateProvider.when('/login', {templateUrl: 'js/vues/login.html', controller: 'loginController'});

  //  $stateProvider.otherwise({redirectTo: '/login'});


    var home = {
            name: 'home',
            url: '/',
            templateUrl: 'js/vues/home.html'
        },
        equipements = {
            name: 'equipements',
            url: 'equipements',
            parent: home,
            templateUrl: 'js/vues/content.equipements.html'
        },
        configuration = {
            name: 'configuration',
            url: 'configuration',
            parent: home,
            templateUrl: 'js/vues/content.configuration.html'
        };
    $stateProvider.state(home);
    $stateProvider.state(equipements);;
    $stateProvider.state(configuration);

}]);



app.run(function ($rootScope,$interval, $location,$state,$localStorage,weatherService) {

    $rootScope.AssignedDate = Date; // 'Date' could be assigned too of course:)
    if(localStorage.getItem("ngStorage-city") === null ){
        $localStorage.city = "Lens";
    }

    if(localStorage.getItem("ngStorage-setting") === null ){
        console.log("should transit to the configuration menu! ");
        $state.transitionTo('configuration');
        var setting = {"ipx":"192.168.1.1",
            "nas":"192.168.1.20",
            "edf":"192.168.1.30",
            "zwave":{
                "ip":"192.168.1.251",
                "user":"admin",
                "password":"Pioupiou21",
                "prises":{
                    //lave-linge
                    "prise1": {"id":"13", "name":"Lave-linge"},
                    // lave-vesselle
                    "prise2":{"id":"14", "name":"Lave-vesselle"},
                    //seche-linge
                    "prise3":{"id":"15", "name":"Seche-linge"}
                }
            }
        };
        $localStorage.setting = setting;

    }else{
        $state.transitionTo('home');
        console.log("it should not transite to the configuration menu")
    }


    $interval(function(){
        // nothing is required here, interval triggers digest automaticaly
    },1000);
    //var routespermission = ['/home'];
    //$rootScope.$on('$routeChangeStart', function () {
    //    if (routespermission.indexOf($location.path()) != -1 && !loginService.islogged()) {
    //        $location.path('/login');
    //    }
    //});
});