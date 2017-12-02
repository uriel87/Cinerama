app.service('facebookApiService', ['$cookies','$location', 'userService', '$q', function ($cookies, $location, userService, $q) {

    (function () {
        window.fbAsyncInit = function() {
            FB.init({
                appId            : '519304358421127',
                autoLogAppEvents : true,
                xfbml            : true,
                cookie           : true,
                version          : 'v2.10'
            });
            FB.AppEvents.logPageView();
        };
    })

    (function(d, s, id){
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) {return;}
        js = d.createElement(s); js.id = id;
        js.src = "//connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));

    this.logOut = function (){
        userService.removeUserCookies();
        FB.getLoginStatus(function(response) {
            if (response.status === 'connected') {
                FB.getLoginStatus(function (response) {
                    if (response && response.status === 'connected') {
                        FB.logout(function (response) {
                        });
                    }
                });
            }
        })
        $location.path('/');
    };

    this.logIn = function (){

        FB.getLoginStatus(function(response) {
            if (response.status === 'connected') {
                // console.log('user details - ' + JSON.stringify(response));
                FB.login(function(response) {
                    if (response.authResponse) {
                        // var accessToken = response.authResponse.accessToken;
                        // console.log('accessToken - ' + JSON.stringify(accessToken));
                        FB.api('/me', {fields: 'name, picture, email, birthday'}, function(response) {
                            // console.log('user details - ' + JSON.stringify(response));
                            userService.putUserCookies(response.name, response.email, response.picture.data.url);
                            // userService.addUserToDb(response.name, response.email, response.picture.data.url, response.birthday);
                            $location.path('/main').replace();
                        });
                    } else {
                        console.log('User cancelled login or did not fully authorize.');
                    }
                }, {scope: 'user_birthday'});
            }
            else {
                FB.login(function(response) {
                    if (response.authResponse) {
                        // var accessToken = response.authResponse.accessToken;
                        // console.log('accessToken - ' + JSON.stringify(accessToken));
                        FB.api('/me', {fields: 'name, picture, email, birthday'}, function(response) {
                            // console.log('user details - ' + JSON.stringify(response));
                            userService.putUserCookies(response.name, response.email, response.picture.data.url);
                            userService.addUserToDb(response.name, response.email, response.picture.data.url, response.birthday);
                            $location.path('/main').replace();
                        });
                    } else {
                        console.log('User cancelled login or did not fully authorize.');
                    }
                }, {scope: 'user_birthday'});
            }
        });
    }

}]);