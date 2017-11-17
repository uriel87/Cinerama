



app.config(["$routeProvider",'$locationProvider', function($routeProvider, $locationProvider) {

    $locationProvider.hashPrefix('');

    $routeProvider
        .when("/logIn", {
            templateUrl: '../views/logIn.html',
            controller: 'logInCtl'
        })
        .when("/main", {
            templateUrl: '../views/main.html',
            controller: 'moviesCtl'
        })
        .when("/movie/:movie/", {
            templateUrl: '../views/movie.html',
            controller: 'movieCtl',
        })
        .otherwise({
            redirectTo: '/logIn'
        });
}]);