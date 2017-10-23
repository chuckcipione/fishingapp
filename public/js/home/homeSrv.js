// 'use strict';

// angular.module('app').service('homeSrv', function($http){
//     return {
//         getWeather: function(){
//             var weather = { temp: {}, clouds: null};
//             $http.jsonp('http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=0ccaced8ebcf7b1fafd82c4bf9851aaa')
//             .success(function(data){
//                 if (data){
//                     if (data.main){
//                         weather.temp.current = data.main.temp;
//                         weather.temp.min = data.main.temp_min;
//                         weather.temp.max = data.main.temp_max;
//                     }
//                     weather.clouds = data.clouds ? data.clouds.all : undefined;
//                 }
//             });
//             return weather;
//         }
//     }
// })
