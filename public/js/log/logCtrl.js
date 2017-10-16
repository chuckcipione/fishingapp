angular.module('app').controller('logCtrl', function($scope, $http, logSrv){
    $scope.submit = function(file) {
        logSrv.uploadImage(file)
      }
      
      logSrv.getData().then(response => {
          $scope.images = response.data
      })

     $scope.getData = 
        logSrv.getData().then(response => {
            $scope.data = response.data
            console.log(response.data)
        }) 

})