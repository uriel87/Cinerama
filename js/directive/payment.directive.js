




/******************************
 *
 * payment directive
 *
 ******************************/

app.directive('payment',['movieService', 'cafeteriaService', function (movieService, cafeteriaService) {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: '../views/templates/payment.html',
        transclude: true,
        link: function(scope, element, attributes) {

            element.addClass('movie-payment');

            cafeteriaService.getCreditCards().then(function(data){
                scope.creditCards = data
                console.log("$scope.CreditCards: " + JSON.stringify(scope.creditCards));
            });
            
            
            // scope.pay = function () {
            //
            // }

            

        }
    }
}]);