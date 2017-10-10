angular.module('app').controller('forumCtrl', function($scope, forumSrv){
    $scope.posts = forumSrv.getPosts();

    $scope.deleteMe = function(textToDelete){
        forumSrv.removeData(textToDelete);
    }

    $scope.addPost = function(){
        var newPost = {
            text: $scope.newPostText,
            author: $scope.newPostAuthor
        }
        if(forumSrv.addData(newPost))
        {
            $scope.newPostText = '';
            $scope.newPostAuthor = '';
        }
    }
})