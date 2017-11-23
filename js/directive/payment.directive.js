




/******************************
 *
 * payment directive
 *
 ******************************/

app.directive('payment',['cafeteriaService', function (cafeteriaService) {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: '../views/templates/payment.html',
        transclude: true,
        scope: {
            // showUserNav: '='
        },
        link: function(scope, element, attributes) {

            element.addClass('movie-payment');

            // scope.userDetails = userService.getUser();
            // scope.logOut = function() {
            //     facebookApiService.logOut();
            //     console.log("logOut");
            // };
            // element.addClass('menu');
            //
            // scope.toggleUserNav = function() {
            //     scope.show = !scope.show;
            // }

        }
    }
}]);