angular.module('app').service('forumSrv', function(){
    var posts = [
        { text: 'If I fished only to capture fish, my fishing trips would have ended long ago.', author: 'Chuck Cipione'},
        { text: 'Somebody just back of you while you are fishing is as bad as someone looking over your shoulder while you write a letter to your girl.', author: 'Chuck Cipione'},
        { text: 'There\'s a fine line between fishing and standing on the shore like an idiot.', author: 'Chuck Cipione'},
        { text: 'Most of the world is covered by water. A fisherman\'s job is simple: Pick out the best parts.', author: 'Chuck Cipione'},
        { text: 'Many men go fishing all of their lives without knowing that it is not fish they are after.', author: 'Chuck Cipione'},
        { text: 'Carpe Diem" does not mean "fish of the day.', author: 'Chuck Cipione'},
        { text: 'Game fish are too valuable to be caught only once.', author: 'Gnarls Cipione'}
      ];
    
      this.getPosts = function(){
          return posts;
      };

      this.addData = function(newPost){
          if(newPost.text && newPost.author){
              posts.push(newPost);
              return true;
          }
          return false;
      };

      this.removeData = function(textToRemove){
          for(var i = 0; i < posts.length; i++){
              if(posts[i].text.toLowerCase() === textToRemove.toLowerCase()){
                  posts.splice(i--, 1);
              }
          }
      };
});