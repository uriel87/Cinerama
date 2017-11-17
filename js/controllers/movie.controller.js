


app.controller('movieCtl', ['$scope', 'movieService', '$routeParams','$location','$timeout', function ($scope, movieService, $location,$routeParams, $timeout) {

    $scope.movie = $routeParams.movie;

    $scope.getMovie = function(movie) {

    };

}]);


