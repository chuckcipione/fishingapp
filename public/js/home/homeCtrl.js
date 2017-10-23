angular.module('app').controller('homeCtrl', function($scope, $http){
    var info = this;
    
    var request = {
      method: 'GET',
      url: 'http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=0ccaced8ebcf7b1fafd82c4bf9851aaa',
      params: {
         q: 'Dallas',
        mode: 'json',
        units: 'imperial',
        cnt: '7'
      }
    };
    $http(request)
    .then(function(response) {
        console.log(response)
      info = response.data;
    })
  });



  
// 'use strict';

// angular.module('app').controller('homeCtrl', function($scope, homeSrv){
//     $scope.weather = homeSrv.getWeather()
// })

























// angular.module('app').controller('homeCtrl', function($scope, $http, $log) {
//   $scope.city = 'Dallas';
//   $scope.units = 'imperial';
 
//   $scope.change = function() {
//     var url = 'http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=0ccaced8ebcf7b1fafd82c4bf9851aaa';
//     $http.jsonp(url, 
//         { params : {
//         q : $scope.city,
//         units : $scope.units,
//         callback: 'JSON_CALLBACK'
//       }})
//       .success(function(data, status, headers, config) {
//         $scope.main = data.main;
//         // $scope.wind = data.wind;
//         // $scope.description = data.weather[0].description;
//       })
//       .error(function(data, status, headers, config) {
//         $log.error('Could not retrieve data from ' + url);
//       });
//   }});