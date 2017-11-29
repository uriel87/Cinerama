


app.service('cafeteriaService', ['$http','$q', function ($http, $q) {

    this.getCafeteriaProducts = function () {

        var defer = $q.defer();

        $http.get("./data/products.json")
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