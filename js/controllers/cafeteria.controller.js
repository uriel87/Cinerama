

app.controller('cafeteriaCtl', ['$scope','cafeteriaService', 'movieService', 'userService', '$location', function ($scope, cafeteriaService, movieService, userService, $location) {


    // if(userService.checkUserLogIn()){
    //     $location.path('/logIn').replace();
    // }

    $scope.cart = [];

    cafeteriaService.getCafeteriaProducts().then(function(data){
        $scope.products = data
    });

    cafeteriaService.getCreditCards().then(function(data){
        $scope.creditCards = data
        console.log("$scope.CreditCards: " + JSON.stringify($scope.creditCards));
    });

    $scope.addToCart = function (product) {
        console.log("product: " + JSON.stringify(product));
        console.log(product);


        var found = false;
        $scope.cart.forEach(function (item) {
            if (item.id == product.id) {
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
        var totalPrice = (movieService.getMovieChooseForOrder().seats.length) * 10;
        $scope.cart.forEach(function (product) {
            totalPrice += product.price * product.quantity;
        });
        return totalPrice;
    };

    $scope.goToPayment = function () {

        userService.setUserCart(angular.extend(
                {
                    movieOrder: movieService.getMovieChooseForOrder()
                },
                {
                    cafeteria: $scope.cart
                },
                {
                    totalPrice: $scope.getCartPrice()
                }
        ));

        console.log("goToPayment $scope.cart:");
        console.log(userService.getUserCart());

        $location.path('/orderSummary').replace();
    };



}]);


