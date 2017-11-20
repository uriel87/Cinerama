



app.controller('addMovieReviewCtl', ['$scope','userService', 'movieService', '$location', function ($scope, userService, movieService, $location) {

    $scope.pushMovieReview = function (comment, review) {
        
        var query = {
            nameMovie: this.currentMovie,
            userName: userService.getUser().name,
            comment: comment,
            review: review
        }
        
        movieService.pushMovieReview(query).then(function(data){
            console.log("pushMovieReview(): " + JSON.stringify(data))
            $location.path('/main').replace();
        });

    };

}]);


