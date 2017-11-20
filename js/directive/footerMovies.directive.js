




/******************************
 *
 * footer movie directive
 *
 ******************************/

app.directive('footerMovie',['$location', function ($location) {
    return {
        restrict: 'E',
        templateUrl: '../views/templates/footerMovies.html',
        transclude: true,
        scope: {

        },
        link: function(scope, element, attributes) {
            element.addClass("footer-movie")
        }
    }
}]);