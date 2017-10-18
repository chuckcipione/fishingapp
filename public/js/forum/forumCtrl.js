angular.module('app').controller('forumCtrl', function($scope, forumSrv){

	$scope.getPosts = function() {
		$scope.posts = forumSrv.getPosts();
	}();

	$scope.addPost = function() {
		forumSrv.addPost($scope.newPost.text, $scope.newPost.author)		
		$scope.newPost.text = "";
		$scope.newPost.author = "";
	}

	$scope.removePost = forumSrv.removePost;



})