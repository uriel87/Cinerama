




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
            sendMovieRequest: '&'
        },
        link: function(scope, element, attributes) {

            element.addClass('movie-payment');

            scope.pay = function () {
                // console.log("pay function called");
            }

        }
    }
}]);