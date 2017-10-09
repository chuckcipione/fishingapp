'use strict';

angular.module('app').controller('forumCtrl', function($scope, forumSrv){
    forumSrv.getMessages().then(function(response){
        $scope.messages = response.data.messages;
    });
    $scope.addMessage = function(message){
        if (message){
            forumSrv.addMessage(message).then(function(response){
                $scope.messages = response.data.messages;
            });
        }
    };
})