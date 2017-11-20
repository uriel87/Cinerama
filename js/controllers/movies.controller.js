


app.controller('moviesCtl', ['$scope', 'movieService','$location', function ($scope, movieService, $location) {

    movieService.movies().then(function(data){
        $scope.movieList = data
        console.log("movieList(): " + JSON.stringify($scope.movieList))
    });

    movieService.getMoviesGeners().then(function(data){
        $scope.movieGener = data.data.geners;
        console.log("movieGener(): " + JSON.stringify($scope.movieGener))
    });

    $scope.goToMoviePage = function(movie) {
        movieService.setCurrentMovie(movie);
        movieService.putMovieCurrentCookies(movie);
        console.log("goToMoviePage: " + movie);
        $location.path("/movie").replace();
    };

}]);


