
app.service('userService', ['$http', '$cookies', '$q', function ($http, $cookies, $q) {

    var url = "https://cinerama-server.herokuapp.com/";

    this.putUserCookies = function (userName, userEmail, userPicture){
        $cookies.put('userName', userName);
        $cookies.put('userEmail', userEmail);
        $cookies.put('userPicture', userPicture);
    }

    this.removeUserCookies = function () {
        $cookies.remove('userName');
        $cookies.remove('userEmail');
        $cookies.remove('userPicture');
    }

    this.checkUserLogIn = function () {
        if($cookies.get('userEmail')){
            return true;
        }
    }

    this.getUser = function () {
        var userDetails = {
            'userName': $cookies.get('userName'),
            'userEmail': $cookies.get('userEmail'),
            'userPicture': $cookies.get('userPicture')
        }
        return userDetails;
    }

    this.addUserToDb = function (userName, UserEmail, userPicture, userBirthday) {

        var query = {
            name: userName,
            email: UserEmail,
            picture: userPicture,
            birthday: userBirthday
        }

        $http.post(url + "addUser", query)
        .then(function(data) {
            // console.log("addUserToDb - " + data);
        }), function error(err) {
            return err;
        }
    }

    this.getUserMoviesOrder = function () {

        var defer = $q.defer();

        var query = {
            email: this.getUser().userEmail
        }

        // console.log(query);

        $http.post(url + "getMovieUser/", query)
            .then(function (response) {
                defer.resolve(response.data);
            });
        return defer.promise;

    }

    this.cart = [];

    this.setUserCart = function (cart) {
        this.cart = cart;
    }

    this.getUserCart = function () {
        return this.cart;
    }

}]);