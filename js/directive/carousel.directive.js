



/******************************
 *
 * carousel directive
 *
 ******************************/

app.directive('carousel',['movieService','$location', function (movieService, $location) {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: '../views/templates/carousel.html',
        transclude: true,
        scope: {
            moviesInfo: '=?info'
        },
        link: function(scope, element, attributes) {

            scope.goToMoviePage = function(movie) {
                movieService.setCurrentMovie(movie);
                console.log("goToMoviePage: " + movie);
                $location.path("/movie").replace();
            };

        }
    }
}]);