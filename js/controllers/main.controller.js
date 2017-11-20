
app.controller('mainCtl', ['$scope', 'movieService','$timeout', function ($scope, movieService, $timeout) {

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

    // $scope.movieList = [];
    // movieService.getMovieList()
    //     .then(function(movieData) {
    //
    //         angular.forEach(movieData.data, function(value, key) {
    //             return movieService.getMovie(value.name)
    //                 .then(function(movieData) {
    //                     console.log("movieData: " + JSON.stringify(movieData));
    //                     $scope.movieList.push(movieData.data);
    //                 }), function error(err) {
    //                 return err;
    //             }
    //
    //         });
    //     }), function error(err) {
    //     return err;
    // };
    
    movieService.getAllMovie()
        .then(function(moviesData) {
            $scope.allMoviesData = moviesData.data;
        }), function error(err) {
        return err;
    }

    movieService.movies().then(function(data){
        $scope.movieList = data
        console.log("movieList(): " + JSON.stringify($scope.movieList))
    });
    

    $timeout(function () {


        $(".slide").slick({
            centerMode: true,
            centerPadding: '100px',
            slidesToShow: 3,
            autoplay: true,
            autoplaySpeed: 2000,
            responsive: [
                {
                    breakpoint: 840,
                    settings: {
                        arrows: true,
                        centerMode: true,
                        centerPadding: '80px',
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 670,
                    settings: {
                        arrows: true,
                        centerMode: true,
                        centerPadding: '90px',
                        slidesToShow: 1
                    }
                }
            ]
        });
    },2000);

}]);


