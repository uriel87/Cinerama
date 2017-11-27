
app.service('movieService', ['$http', 'userService', '$q','$sce', '$cookies', function ($http, userService, $q, $sce, $cookies) {

    var url = "http://localhost:3000/";

    // var url = "https://cineramaserver.herokuapp.com/";

    var thisService = this;

    this.currentMovie = null;

    this.movieList = null;

    this.movieChooseForOrder = null;

    this.getCurrentMovie = function () {
        // if(!this.currentMovie) {
        //     this.currentMovie = thisService.getMovieCurrentCookies()
        // }
        return this.currentMovie
    }

    this.setCurrentMovie = function (movie) {
        this.currentMovie = movie;
    }

    this.getMovieChooseForOrder = function () {
        return this.movieChooseForOrder
    }

    this.setMovieChooseForOrder = function (movie) {
        this.movieChooseForOrder = movie;
        console.log(this.movieChooseForOrder);

    }

    this.getMovie = function(movie) {

        var query = {
            name: movie
        }

        return $http.post(url + "getMovie/", query)
            .then(function (response) {
                // console.log("data-----: " + JSON.stringify(response.data));
                return {
                data: response.data
            }
        });
    };

    this.getAllMovie = function() {
        return $http.post(url + "getAllMovies/")
            .then(function (response) {
                return {
                    data: response.data
                }
            });
    };

    this.getMovieList = function() {
        return $http.post(url + "getAllReviews")
            .then(function (response) {
                return {
                    data: response.data
                }
            });
    };


    this.movies = function() {

        var movieList = $q.defer();
        var movieListTemp = [];

        return $http.post(url + "getAllReviews")
            .then(function(movieData) {

                angular.forEach(movieData.data, function(value, key) {

                    var query = {
                        name: value.name
                    }

                    $http.post(url + "getMovie/", query)
                        .then(function(movieData) {
                            movieListTemp.push(movieData.data);
                        }), function error(err) {
                        return err;
                    }

                });
                movieList.resolve(movieListTemp);
                console.log("movieListTemp: " + movieListTemp)
                return movieList.promise;
            })
    };


    this.getMovieCineramaDetails = function (movie) {
        // console.log("getMovieCineramaDetails - movie: " + JSON.stringify(movie));
        var defer = $q.defer();
        var query = {
            name: movie
        }
        $http.post(url + "getMovieDetails/", query)
            .then(function (response) {
                // console.log("getMovieCineramaDetails - response.data: " + JSON.stringify(response.data));
                defer.resolve(response.data);
            });
        return defer.promise;
    }


    this.getMovieTrailer = function (movie) {
        // console.log("in getMovieTrailer - movie: " + JSON.stringify(movie));
        var defer = $q.defer();
        var query = {
            name: movie
        }
        $http.post(url + "getMovieTrailer/", query)
            .then(function (response) {
                var urltrailer = $sce.trustAsResourceUrl(response.data);
                defer.resolve(urltrailer);
            });
        return defer.promise;
    }


    this.getMovieReview = function (movie) {
        // console.log("in getMovieReview - movie: " + JSON.stringify(movie));
        var defer = $q.defer();
        var query = {
            name: movie
        }
        $http.post(url + "getMovieReview/", query)
            .then(function (response) {
                defer.resolve(response);
            });
        return defer.promise;
    }
    
    this.pushMovieReview = function (query) {
        var defer = $q.defer();
        $http.post(url + "pushReview/", query)
            .then(function (response) {
                defer.resolve(response);
            });
        return defer.promise;
    }

    this.getMoviesGeners = function () {
        var defer = $q.defer()
        $http.get("./data/movieGener.json")
            .then(function (response) {
                defer.resolve(response);
            });
        return defer.promise;
    }

    this.putMovieCurrentCookies = function (movie){
        $cookies.put('currentMovie', JSON.stringify(movie));
    }

    this.getMovieCurrentCookies = function (movie){
        return $cookies.get('currentMovie');
    }
    
    this.sendMovieRequest = function () {

        var movieRequest = userService.getUserCart();
        console.log("****sendMovieRequest****: " + movieRequest);
        console.log(movieRequest);
        for (var i = 0; i < movieRequest.movieOrder.seats.length; i++) {
            var defer = $q.defer();
            var orderUser = {
                id: movieRequest.movieOrder._id.id,
                name: movieRequest.movieOrder._id.name,
                date: movieRequest.movieOrder._id.time,
                auditorium: movieRequest.movieOrder._id.auditorium,
                cinema: movieRequest.movieOrder._id.cinema,
                branch: movieRequest.movieOrder._id.branch,
                row: movieRequest.movieOrder.seats[i].row,
                number: movieRequest.movieOrder.seats[i].number,
                email: userService.getUser().userEmail
            }
            $http.post(url + "setOrderMovie/", orderUser)
                .then(function (response) {
                    defer.resolve(response);
                    console.log("-----sendMovieRequest-----: " + response);
                    console.log(response);

                });

        }
        return defer.promise;
    }






}]);