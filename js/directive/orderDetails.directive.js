


/******************************
 *
 * orderDetails directive
 *
 ******************************/

app.directive('orderDetails',['movieService', 'cafeteriaService', function (movieService, cafeteriaService) {
    return {
        restrict: 'E',
        templateUrl: '../views/templates/orderDetails.html',
        transclude: true,
        scope: {
            orderDetails: '=?info'
        },
        link: function(scope, element, attributes) {

            element.addClass('orderDetails');
            
            // scope.pay = function () {
            //
            // }

        }
    }
}]);