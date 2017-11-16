
app.controller('logInCtl', ['$scope', '$timeout', '$window', '$location', 'userService','facebookApiService', function ($scope, $timeout, $window, $location, userService, facebookApiService) {

    if(userService.checkUserLogIn()){
        $location.path('/main').replace();
    }

    $scope.logIn = function () {
        facebookApiService.logIn();
        setTimeout(function() {
            $location.path('/main').replace();
        }, 1000);
    }

}]);


