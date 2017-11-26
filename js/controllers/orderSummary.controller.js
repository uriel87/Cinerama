



app.controller('orderSummaryCtl', ['$scope','cafeteriaService', 'movieService', 'userService', '$location', function ($scope, cafeteriaService, movieService, userService, $location) {


    // if(userService.checkUserLogIn()){
    //     $location.path('/logIn').replace();
    // }

    $scope.movieOrderDetails = userService.getUserCart();

    $scope.sendMovieRequest = function () {
        movieService.sendMovieRequest().then(function(data){
            console.log("orderSummaryCtl sendMovieRequest called: " + data);
            $location.path('/main').replace();
        });
        // $location.path('/main').replace();
    }


}]);


