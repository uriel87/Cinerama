




app.controller('userMovieOrderCtl', ['$scope','userService', 'movieService', function ($scope, userService, movieService) {

    userService.getUserMoviesOrder().then(function(data){
        $scope.userMovies = data
        console.log("userMovies(): " + JSON.stringify($scope.userMovies))
    });

}]);


