angular.module('app').controller('logCtrl', function($scope, $http, $window, logSrv){
    // $scope.getData = 
    // logSrv.getData().then(response => {
    //     $scope.images = response.data
    //     console.log(response.data)
    // }) 
    logSrv.getData().then(response => {
        $scope.images = response.data
    })

    $scope.submit = function(file) {
        logSrv.uploadImage(file)
      }



    // $scope.reload = () => {
    //     setTimeout(() =>{
    //         $window.location.reload()
    //     }, 1000)
    // }

})