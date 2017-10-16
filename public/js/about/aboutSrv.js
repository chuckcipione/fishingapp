angular.module('app').service('aboutSrv', function($http){
    this.getSpecies = function(){
        $http.get("http://fishmap.org/api/HUVYHxnNqcAGpjDnQcga/species/Largemouth-Bass/state/TX.html")
    }
})