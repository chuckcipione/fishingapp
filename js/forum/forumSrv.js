'use strict';

angular.module('app').service('forumSrv', function($http){
    this.getMessages = function () {
        return $http.get('/forum');
      }

      this.addMessage = function ( message ) {
        return $http.post('/forum', { message: message });
      }
})