
app.controller('moviesCtl', ['$scope', 'movieService', function ($scope, movieService) {

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


    $scope.position = -357;


     function updateMovieList(reverse) {
         if(reverse) {
             $scope.movieList.unshift($scope.movieList.pop())

         } else {
             $scope.movieList.push($scope.movieList.shift())
         }
     }


    $scope.carouselLeft = function() {
        $("#carousel-left").click(function(){
            $scope.position = $scope.position - 50;
            $(".slide").css({"transform": "translate3d(" + $scope.position + "px, 0px, 0px)"});
            console.log("position: " + $scope.position)
        });
        updateMovieList(true)
    };

    $scope.carouselRight = function() {

        if($scope.position > 0) {
            updateMovieList(false)
            $scope.position = -357;
        } else {
            $("#carousel-right").click(function(){
                // if(position < -107) {
                $scope.position = $scope.position + 50;
                $(".slide").css({"transform": "translate3d(" + $scope.position + "px, 0px, 0px)"});
                console.log("position: " + $scope.position)
                // }
            });
        }
    };


    
}]);


