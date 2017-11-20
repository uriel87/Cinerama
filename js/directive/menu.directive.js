


/******************************
 *
 * main menu directive
 *
 ******************************/

app.directive('menu',['userService', 'facebookApiService', '$location', function (userService, facebookApiService, $location) {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: '../views/templates/menu.html',
        transclude: true,
        scope: {
            showUserNav: '='
        },
        link: function(scope, element, attributes) {

            scope.userDetails = userService.getUser();
            scope.logOut = function() {
                facebookApiService.logOut();
                console.log("logOut");
            };
            element.addClass('menu');

            scope.toggleUserNav = function() {
                scope.show = !scope.show;
            }

        }
    }
}]);