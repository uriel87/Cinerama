
app.service('movieService', ['$http','$q', function ($http, $q) {

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


    this.movies = function() {

        var movieList = $q.defer();
        var movieListTemp = [];

        return $http.post("https://cineramaserver.herokuapp.com/getAllReviews")
            .then(function(movieData) {

                angular.forEach(movieData.data, function(value, key) {

                    var query = {
                        name: value.name
                    }

                    $http.post("https://cineramaserver.herokuapp.com/getMovie/", query)
                        .then(function(movieData) {
                            movieListTemp.push(movieData.data);
                        }), function error(err) {
                        return err;
                    }

                });
                movieList.resolve(movieListTemp);
                return movieList.promise;
            })
    };


}]);