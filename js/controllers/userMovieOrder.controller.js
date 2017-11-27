




app.controller('userMovieOrderCtl', ['$scope','userService', 'movieService', '$location', function ($scope, userService, movieService, $location) {

    userService.getUserMoviesOrder().then(function(data){
        $scope.userMovies = data
        console.log("userMovies(): " + JSON.stringify($scope.userMovies))
    });

    $scope.pushMovieReview = function (movie, review, comment) {
        console.log("pushMovieReview() called" + JSON.stringify(movie))

        var query = {
            nameMovie: movie.name,
            userName: userService.getUser().userName,
            comment: comment,
            review: review
        }

        movieService.pushMovieReview(query).then(function(data){
            console.log("pushMovieReview() response: " + JSON.stringify(data))
            // $scope.movieToPushReview = movieService.setCurrentMovieToPushReview(null);
            $location.path('/main').replace();
        });

    };


}]);


