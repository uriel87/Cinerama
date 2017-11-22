



app.config(["$routeProvider",'$locationProvider', function($routeProvider, $locationProvider) {

    $locationProvider.hashPrefix('');

    $routeProvider
        .when("/logIn", {
            templateUrl: '../views/logIn.html',
            controller: 'logInCtl'
        })
        .when("/main", {
            templateUrl: '../views/main.html',
            controller: 'mainCtl'
        })
        .when("/movie", {
            templateUrl: '../views/movie.html',
            controller: 'movieCtl'
        })
        .when("/movies", {
            templateUrl: '../views/movies.html',
            controller: 'moviesCtl'
        })
        .when("/payment", {
            templateUrl: '../views/payment.html',
            controller: 'paymentCtl'
        })
        .when("/userMovieOrder", {
            templateUrl: '../views/userMovieOrder.html',
            controller: 'userMovieOrderCtl'
        })
        .when("/addMovieReview", {
            templateUrl: '../views/addMovieReview.html',
            controller: 'addMovieReviewCtl'
        })
        .when("/about", {
            templateUrl: '../views/about.html'
        })
        .when("/contactUs", {
            templateUrl: '../views/contactUs.html'
        })
        .otherwise({
            redirectTo: '/logIn'
        });
}]);


