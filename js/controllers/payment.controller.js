

app.controller('paymentCtl', ['$scope','paymentService', 'movieService', function ($scope, paymentService, movieService) {


    // if(userService.checkUserLogIn()){
    //     $location.path('/logIn').replace();
    // }

    paymentService.getCafeteriaProducts().then(function(data){
        $scope.products = data
    });

    paymentService.getCreditCards().then(function(data){
        $scope.creditCards = data
        console.log("$scope.CreditCards: " + JSON.stringify($scope.creditCards));
    });

    $scope.movie = movieService.getCurrentMovie();


    $scope.cart = [];

    $scope.addToCart = function (product) {
        var found = false;
        $scope.cart.forEach(function (item) {
            if (item._id == product._id) {
                item.quantity++;
                found = true;
            }
        });
        if (!found) {
            $scope.cart.push(angular.extend(product, {quantity: 1}, product));
        }
    };

    // $scope.getCartPrice = function () {
    //     var total = 0;
    //     var ticktPrice = 0
    //     if ($scope.Userseats.length) {
    //         ticktPrice = $scope.Userseats.length * 40;
    //     }
    //     $scope.cart.forEach(function (product) {
    //         total += product.price * product.quantity;
    //     });
    //     return total + ticktPrice;
    // };

    $scope.returnToOrder = function () {
        $state.go('order' , {movie_name: $scope.movieDetails._id.name});
    };



}]);


