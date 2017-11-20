
app.service('userService', ['$http', '$cookies', '$q', function ($http, $cookies, $q) {

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


    // this.checkUserSignUp = function (userEmail) {
    //
    //     let userExist = false;
    //
    //     var query = {
    //         email: userEmail
    //     }
    //
    //     $http.post("https://cineramaserver.herokuapp.com/getUser", query)
    //         .then(function(data) {
    //             console.log("data in checkUserSignUp: " + JSON.stringify(data.data.email));
    //             if(data.data.email.toString()) {
    //                 console.log("data in checkUserSignUp in if: " + data.data.email);
    //                 userExist = true;
    //             }
    //     }), function error(err) {
    //         return err;
    //     }
    //
    //     setTimeout(function() {
    //         console.log("userExist: " + userExist);
    //         return userExist;
    //     }, 1000);
    //
    // }

    this.addUserToDb = function (userName, UserEmail, userPicture, userBirthday) {

        var query = {
            name: userName,
            email: UserEmail,
            picture: userPicture,
            birthday: userBirthday
        }

        $http.post("https://cineramaserver.herokuapp.com/addUser", query)
        .then(function(data) {
            console.log("addUserToDb - " + data);
        }), function error(err) {
            return err;
        }
    }

    this.getUserMoviesOrder = function () {

        var defer = $q.defer();

        var query = {
            name: this.getUser.userEmail
        }

        $http.post("https://cineramaserver.herokuapp.com/getMovieUser/", query)
            .then(function (response) {
                defer.resolve(response.data);
            });
        return defer.promise;

    }

}]);