


app.service('cafeteriaService', ['$http','$q', function ($http, $q) {


    this.getCafeteriaProducts = function () {

        var defer = $q.defer();

        $http.post("https://cineramaserver.herokuapp.com/getAllProduct/")
            .then(function (response) {
                defer.resolve(response);
            });

        return defer.promise;
    }

}]);