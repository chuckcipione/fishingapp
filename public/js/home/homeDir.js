// 'use strict';

// angular.module('app').directive('homeDir', function() {
//     return {
//         restrict: 'E', replace: true,
//         scope: {
//             cloudiness: '@'
//         },
//         controller: function($scope) {
//             $scope.imgurl = function() {
//                 var baseUrl = 'https://ssl.gstatic.com/onebox/weather/128/';
//                 if ($scope.cloudiness < 20) {
//                     return baseUrl + 'sunny.png';
//                 } else if ($scope.cloudiness < 90) {
//                    return baseUrl + 'partly_cloudy.png';
//                 } else {
//                     return baseUrl + 'cloudy.png';
//                 }
//             };
//         }}
//     })