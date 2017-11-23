
app.service('movieService', ['$http', 'userService', '$q','$sce', '$cookies', function ($http, userService, $q, $sce, $cookies) {

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
                console.log("movieListTemp: " + movieListTemp)
                return movieList.promise;
            })
    };


    this.getMovieCineramaDetails = function (movie) {

        console.log("getMovieCineramaDetails - movie: " + JSON.stringify(movie));

        var defer = $q.defer();

        var query = {
            name: movie
        }

        $http.post("https://cineramaserver.herokuapp.com/getMovieDetails/", query)
            .then(function (response) {
                // console.log("getMovieCineramaDetails - response.data: " + JSON.stringify(response.data));
                defer.resolve(response.data);
            });
        return defer.promise;

    }


    this.getMovieTrailer = function (movie) {

        console.log("in getMovieTrailer - movie: " + JSON.stringify(movie));

        var defer = $q.defer();

        var query = {
            name: movie
        }

        $http.post("https://cineramaserver.herokuapp.com/getMovieTrailer/", query)
            .then(function (response) {
                var urltrailer = $sce.trustAsResourceUrl(response.data);
                defer.resolve(urltrailer);
            });
        return defer.promise;

    }


    this.getMovieReview = function (movie) {

        console.log("in getMovieReview - movie: " + JSON.stringify(movie));

        var defer = $q.defer();

        var query = {
            name: movie
        }

        $http.post("https://cineramaserver.herokuapp.com/getMovieReview/", query)
            .then(function (response) {
                defer.resolve(response);
            });
        return defer.promise;

    }




    this.pushMovieReview = function (query) {

        // var query = {
        //     nameMovie: this.currentMovie,
        //     userName: userService.getUser().name,
        //     comment: comment,
        //     review: review
        // }

        $http.post("https://cineramaserver.herokuapp.com/pushReview/", query)
            .then(function (response) {
                // defer.resolve(response);
            });
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


    // $http.post("https://cineramaserver.herokuapp.com/getMovieReview/", data).success(function(review, status) {
    //     $scope.review = review;
    //     $scope.lastComment = review[0].reviews[review[0].reviews.length - 1];
    //     //console.log($scope.review);
    // });






}]);