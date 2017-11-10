



app.config(["$routeProvider",'$locationProvider', function($routeProvider, $locationProvider) {

    $locationProvider.hashPrefix('');

    $routeProvider
        .when("/logIn", {
            templateUrl: '../views/logIn.html'
            // controller: 'mainCtl',
        })
        .when("/main", {
            templateUrl: '../views/main.html'
            // controller: 'mainCtl',
        })
        .otherwise({
            redirectTo: '/main'
        });
}]);