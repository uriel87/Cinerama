

app.controller('cafeteriaCtl', ['$scope','cafeteriaService', function ($scope, cafeteriaService) {

    cafeteriaService.getCafeteriaProducts().then(function(data){
        $scope.product = data
    });

    // if(userService.checkUserLogIn()){
    //     $location.path('/main').replace();
    // }
    //
    // $scope.logIn = function () {
    //     facebookApiService.logIn();
    //     setTimeout(function() {
    //         $location.path('/main').replace();
    //     }, 1000);
    // }

}]);


