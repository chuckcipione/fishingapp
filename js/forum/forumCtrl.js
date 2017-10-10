angular.module('app').controller('forumCtrl', function($scope, forumSrv){
    $scope.quotes = forumSrv.getQuotes();
    
    $scope.deleteMe = function(textToDelete){
        forumSrv.removeData(textToDelete);
    }
    
    $scope.addQuote = function(){
        var newQuote = {
            text: $scope.newQuoteText,
            author: $scope.newQuoteAuthor
        }
        if(forumSrv.addData(newQuote))
        {
            $scope.newQuoteText = '';
            $scope.newQuoteAuthor = '';
        }
    }
    
    })