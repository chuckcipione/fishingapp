angular.module('app').service('forumSrv', function(){
	var posts = [];
	if(localStorage.posts) {
		posts = JSON.parse(localStorage.getItem("posts"));
	} else {
		posts = 
		[
            { text: 'There\'s a fine line between fishing and standing on the shore like an idiot.', author: 'Chuck Cipione'}   
		];
	}
	

	this.getPosts = function() {
		return posts;
	};

	this.addPost = function(post, author) {
		posts.unshift({text:post, author:author});
		localStorage.setItem('posts', JSON.stringify(posts));
	};

	this.removePost = function(post) {
		for(var i = 0; i < posts.length; i++) {
			if(posts[i].text == post) {
				posts.splice(i, 1);
				break;
			}
		}
		localStorage.setItem('posts', JSON.stringify(posts));
	};

})
