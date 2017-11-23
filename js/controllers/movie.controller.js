


app.controller('movieCtl', ['$scope', 'movieService','$location','$timeout', function ($scope, movieService, $location, $timeout) {

    $scope.Userseats = [];
    $scope.requireInput = false

    if(movieService.getCurrentMovie() == undefined){
        $location.path('/main').replace();
    }

    $scope.movie = movieService.getCurrentMovie();

    movieService.getMovieCineramaDetails($scope.movie.title).then(function(data){
        console.log("movieCtl.movieCineramaDetails: " + JSON.stringify(data))
        $scope.movieCineramaDetails = data
    });

    movieService.getMovieTrailer($scope.movie.title).then(function(data){
        console.log("movieCtl.getMovieTrailer: " + JSON.stringify(data))
        $scope.movieTrailer = data;
    });

    movieService.getMovieReview($scope.movie.title).then(function(data){
        console.log("movieCtl.getMovieReview: " + JSON.stringify(data))
        $scope.movieReview = data.data;
        $scope.lastCommentReview = $scope.movieReview[0].reviews[$scope.movieReview[0].reviews.length - 1];
    });

    $scope.getReviewPercentage = function (review) {
        return (review / $scope.getTotalReview()) * 100;
    }

    $scope.getTotalReview = function () {
        // setTimeout(function() {
            return parseInt($scope.movieReview[0].wtf) +
                parseInt($scope.movieReview[0].lame) +
                parseInt($scope.movieReview[0].wow) +
                parseInt($scope.movieReview[0].nice)
        // }, 1000);

    }

    $scope.getReviewPercentage = function (review) {
        //setTimeout(function() {
            if(!review) {
                widthPrecetage = 0;
            } else {
                widthPrecetage = (review / $scope.getTotalReview()) * 100;
            }
            widthRating = {
                "width" : widthPrecetage + '%'
            }
            console.log("$scope.getTotalReview(): " + $scope.getTotalReview());
            console.log("widthRating: " + JSON.stringify(widthRating));
            return widthRating
        //}, 50);
    }

    $scope.setCurrentMovie = function (currentBranch) {
        $scope.Userseats = [];
        $scope.CurrentBranch = [];
        for (var i = 0; i < $scope.movieCineramaDetails.length; i++) {
            if( ($scope.movieCineramaDetails[i]._id.branch == currentBranch._id.branch) && ($scope.movieCineramaDetails[i]._id.cinema == currentBranch._id.cinema)) {
                $scope.CurrentBranch.push(angular.extend({}, $scope.movieCineramaDetails[i]));
            }
        }
        console.log($scope.CurrentBranch);
    }

    $scope.movieChooseByTime = function(movieChoose) {
        $scope.Userseats = [];
        $scope.movieChoose = movieChoose;
        console.log($scope.movieChoose);

    };

    $scope.setSeat = function(seats, isChecked) {

        if(isChecked) {
            $scope.Userseats.push(seats);
            $scope.requireInput = true;
            console.log($scope.Userseats);
            console.log("$scope.requireInput: " + $scope.requireInput);

        } else {
            var index = $scope.Userseats.indexOf(seats);
            $scope.Userseats.splice(index, 1);
            console.log($scope.Userseats);
            // if(!angular.equals({}, $scope.Userseats)){
            if($scope.Userseats.length < 1){
                $scope.requireInput = false;
            }
            console.log("$scope.requireInput: " + $scope.requireInput);
        }

    };

    $scope.itemClicked = function ($index) {
        $scope.selectedIndex = $index;
    }

    $scope.goToPaymentPage = function() {
        if($scope.requireInput) {
            movieService.setMovieChoosenForOrder(angular.extend($scope.movieChoose, {seats: $scope.Userseats}));
            $location.path('/payment').replace();
        }
    };

}]);


