/**
 * Created by ADahmani on 01/04/2015.
 */
'use strict';

app.factory('weatherService', function($http) {
    return {
        getWeather: function(city) {
            var weather = { temp: {}, clouds: null, name:"", description:"" };
            $http.jsonp('http://api.openweathermap.org/data/2.5/weather?q=' + city + ',FR&units=metric&&lang=fr&callback=JSON_CALLBACK').success(function(data) {
                if (data) {
                    if (data.main) {
                        weather.temp.current = data.main.temp;
                        weather.temp.min = data.main.temp_min;
                        weather.temp.max = data.main.temp_max;
                    }
                    weather.clouds = data.clouds ? data.clouds.all : undefined;
                    weather.name = data.name;
                    weather.description = data.weather[0].description;
                }
            });

            return weather;
        }
    };
});

app.filter('temp', function($filter) {
    return function(input, precision) {
        if (!precision) {
            precision = 1;
        }
        var numberFilter = $filter('number');
        return numberFilter(input, precision) + '\u00B0C';
    };
});

app.directive('weatherIcon', function() {
    return {
        restrict: 'E', replace: true,
        scope: {
            cloudiness: '@'
        },
        controller: function($scope) {
            $scope.imgurl = function() {
                var baseUrl = 'https://ssl.gstatic.com/onebox/weather/32/';
                if ($scope.cloudiness < 20) {
                    return baseUrl + 'sunny.png';
                } else if ($scope.cloudiness < 90) {
                    return baseUrl + 'partly_cloudy.png';
                } else {
                    return baseUrl + 'cloudy.png';
                }
            };
        },
        template: '<div style="float:left"><img style="width: 20px;" ng-src="{{ imgurl() }}"></div>'
    };
});

app.directive('weatherIconbig', function() {
    return {
        restrict: 'E', replace: true,
        scope: {
            cloudinessbig: '@'
        },
        controller: function($scope) {
            $scope.imgurl = function() {
                var baseUrl = 'https://ssl.gstatic.com/onebox/weather/128/';
                if ($scope.cloudinessbig < 20) {
                    return baseUrl + 'sunny.png';
                } else if ($scope.cloudinessbig < 90) {
                    return baseUrl + 'partly_cloudy.png';
                } else {
                    return baseUrl + 'cloudy.png';
                }
            };
        },
        template: '<div style="float:left"><img ng-src="{{ imgurl() }}"></div>'
    };
});