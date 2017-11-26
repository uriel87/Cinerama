


app.service('cafeteriaService', ['$http','$q', function ($http, $q) {

    var url = "http://localhost:3000/";

    // var url = "https://cineramaserver.herokuapp.com/";

    // this.cart = [];
    //
    // this.setUserCart = function (cart) {
    //     this.cart = cart;
    // }
    //
    // this.getUserCart = function () {
    //     return this.cart;
    // }

    // this.addToCart = function (product) {
    //     this.cart.push(product)
    // }
    //
    // this.removeFromCart = function (product) {
    //     if(!this.cart.empty()) {
    //         this.cart.splice(index, 1);
    //     }
    // }

    this.getCafeteriaProducts = function () {

        var defer = $q.defer();

        $http.post(url + "getAllProduct/")
            .then(function (response) {
                defer.resolve(response.data);
            });

        return defer.promise;
    }


    this.getCreditCards = function () {

        var defer = $q.defer()

        $http.get("./data/creditCard.json")
            .then(function (response) {
                defer.resolve(response.data);
            });

        return defer.promise;
    }

}]);