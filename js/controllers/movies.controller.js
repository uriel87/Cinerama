
app.controller('moviesCtl', ['$scope', 'movieService','$timeout', function ($scope, movieService, $timeout) {

    $scope.getMovie = function(movie) {
        return movieService.getMovie(movie)
            .then(function(movieData) {
                return {
                    data: movieData.data
                }
            }), function error(err) {
            return err;
        }
    };

    $scope.movieList = [];
    movieService.getMovieList()
        .then(function(movieData) {

            angular.forEach(movieData.data, function(value, key) {
                return movieService.getMovie(value.name)
                    .then(function(movieData) {
                        console.log("movieData: " + JSON.stringify(movieData));
                        $scope.movieList.push(movieData.data);
                    }), function error(err) {
                    return err;
                }

            });
        }), function error(err) {
        return err;
    };
    
    movieService.getAllMovie()
        .then(function(moviesData) {
            $scope.allMoviesData = moviesData.data;
        }), function error(err) {
        return err;
    }
    

    $timeout(function () {
        $(".slide").slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            centerPadding: '60px',
            autoplay: true,
            autoplaySpeed: 2000,
        });
    },2000);

}]);


