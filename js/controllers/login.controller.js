
app.controller('logInCtl', ['$scope', '$timeout', '$window', '$location', 'userService','facebookApiService', function ($scope, $timeout, $window, $location, userService, facebookApiService) {

    setTimeout(function() {
        // console.log("logInCtl logIn");
        facebookApiService.logIn();
    }, 1000);
    

    $scope.logIn = function () {
        facebookApiService.logIn();
    }

}]);


