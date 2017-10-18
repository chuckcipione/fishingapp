angular.module('app', ['ui.router', 'ngFileUpload'])
.config(($stateProvider, $urlRouterProvider, $httpProvider) => {
    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'js/home/home.html',
            controller: 'homeCtrl'
        })
        .state('map', {
            url: '/map',
            templateUrl: 'js/map/map.html',
            controller: 'mapCtrl'
        })
        .state('forum', {
            url: '/forum',
            templateUrl: 'js/forum/forum.html',
            controller: 'forumCtrl'
        })
        .state('log', {
            url: '/log',
            templateUrl: 'js/log/log.html',
            controller: 'logCtrl'
        })
        // .state('about', {
        //     url: '/about',
        //     templateUrl: 'js/about/about.html',
        //     controller: 'aboutCtrl'
        // })
});
