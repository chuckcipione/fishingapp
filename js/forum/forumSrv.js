angular.module('app').service('forumSrv', function(){
    var quotes = [
        { text: 'There\'s a fine line between fishing and standing on the shore like an idiot.', author: 'Chuck Cipione'}
      ];
    
      this.getQuotes = function(){
        return quotes;
    };

    this.addData = function(newQuote){
        if(newQuote.text && newQuote.author){
            quotes.push(newQuote);
            return true;
        }
        return false;
    };

    this.removeData = function(textToRemove){
        for(var i = 0; i < quotes.length; i++){
            if(quotes[i].text.toLowerCase() === textToRemove.toLowerCase()){
                quotes.splice(i--, 1);
            }
        }
    };
});
