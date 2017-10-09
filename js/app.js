angular.module('app', ['ui.router'])
.config(($stateProvider, $urlRouterProvider) => {
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
        .state('about', {
            url: '/about',
            templateUrl: 'js/about/about.html',
            controller: 'aboutCtrl'
        })
});