



app.controller('orderSummaryCtl', ['$scope','cafeteriaService', 'movieService', 'userService', '$location', function ($scope, cafeteriaService, movieService, userService, $location) {


    // if(userService.checkUserLogIn()){
    //     $location.path('/logIn').replace();
    // }

    $scope.movieOrderDetails = userService.getUserCart();

}]);


