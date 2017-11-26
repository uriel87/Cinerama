



app.controller('addMovieReviewCtl', ['$scope','userService', 'movieService', '$location', function ($scope, userService, movieService, $location) {

    // $scope.movieToPushReview = movieService.getCurrentMovieToPushReview();
    //
    // $scope.pushMovieReview = function (comment, review) {
    //    
    //     var query = {
    //         nameMovie: pushMovieReview.name,
    //         userName: userService.getUser().name,
    //         comment: comment,
    //         review: review
    //     }
    //    
    //     movieService.pushMovieReview(query).then(function(data){
    //         console.log("pushMovieReview(): " + JSON.stringify(data))
    //         $scope.movieToPushReview = movieService.setCurrentMovieToPushReview(null);
    //         $location.path('/main').replace();
    //     });
    //
    // };

}]);


