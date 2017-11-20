


app.controller('movieCtl', ['$scope', 'movieService','$location','$timeout', function ($scope, movieService, $location, $timeout) {

    if(movieService.getCurrentMovie() == undefined){
        $location.path('/main').replace();
    }

    $scope.movie = movieService.getCurrentMovie();

    movieService.getMovieCineramaDetails($scope.movie.title).then(function(data){
        console.log("movieCtl.movieCineramaDetails: " + JSON.stringify(data))
        $scope.movieCineramaDetails = data
    });

    movieService.getMovieTrailer($scope.movie.title).then(function(data){
        console.log("movieCtl.getMovieTrailer: " + JSON.stringify(data))
        $scope.movieTrailer = data;
    });

    movieService.getMovieReview($scope.movie.title).then(function(data){
        console.log("movieCtl.getMovieReview: " + JSON.stringify(data))
        $scope.movieReview = data.data;
        $scope.lastCommentReview = $scope.movieReview[0].reviews[$scope.movieReview[0].reviews.length - 1];
    });

}]);


