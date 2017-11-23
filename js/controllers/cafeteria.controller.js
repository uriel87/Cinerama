

app.controller('cafeteriaCtl', ['$scope','cafeteriaService', 'movieService', '$location', function ($scope, cafeteriaService, movieService, $location) {


    // if(userService.checkUserLogIn()){
    //     $location.path('/logIn').replace();
    // }

    $scope.cart = [];

    $scope.movie = movieService.getmovieChoosenForOrder();

    cafeteriaService.getCafeteriaProducts().then(function(data){
        $scope.products = data
    });

    cafeteriaService.getCreditCards().then(function(data){
        $scope.creditCards = data
        console.log("$scope.CreditCards: " + JSON.stringify($scope.creditCards));
    });

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

    this.removeFromCart = function (product) {
        if(!$scope.cart.contain(product)) {
            var index = $scope.cart.indexOf(product);
            $scope.Userseats.splice(index, 1);
        }
    }

    $scope.getCartPrice = function () {
        var totalPrice = $scope.movie.seats.length * 10;
        $scope.cart.forEach(function (product) {
            totalPrice += product.price * product.quantity;
        });
        return totalPrice;
    };

    $scope.goToPayment = function () {
        cafeteriaService.setCart($scope.cart);
        $location.path('/orderSummary').replace();
    };



}]);


