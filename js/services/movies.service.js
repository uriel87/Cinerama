
app.service('movieService', ['$http', function ($http) {

    var thisService = this;

    this.getMovie = function(movie) {

        var query = {
            name: movie
        }

        return $http.post("https://cineramaserver.herokuapp.com/getMovie/", query)
            .then(function (response) {
                // console.log("data-----: " + JSON.stringify(response.data));
                return {
                data: response.data
            }
        });
    };

    this.getAllMovie = function() {

        return $http.post("https://cineramaserver.herokuapp.com/getAllMovies/")
            .then(function (response) {
                return {
                    data: response.data
                }
            });
    };

    this.getMovieList = function() {

        return $http.post("https://cineramaserver.herokuapp.com/getAllReviews")
            .then(function (response) {
                return {
                    data: response.data
                }
            });
    };

}]);