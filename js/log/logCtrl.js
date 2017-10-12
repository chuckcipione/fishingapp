angular.module('app').controller('logCtrl', function($scope, logSrv){
    $scope.submit = function(file) {
        logSrv.uploadImage(file)
      }
})