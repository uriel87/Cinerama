


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

            element.addClass('menu');

            scope.userDetails = userService.getUser();

            scope.logOut = function() {
                facebookApiService.logOut();
                console.log("logOut");
            };

            scope.toggleUserNav = function() {
                if(!scope.showUserNav) {
                    $('.menu nav').removeClass("show-nav-mobile");
                }
                scope.showUserNav = !scope.showUserNav;
                // console.log("before scope.showUserNav : " + scope.showUserNav )
            }

            scope.toggleMainNav = function() {
                if(scope.showUserNav) {
                    scope.showUserNav = !scope.showUserNav;
                }
                $('.menu nav').toggleClass("show-nav-mobile");
            }

        }
    }
}]);