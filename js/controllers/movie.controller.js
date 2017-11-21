


app.controller('movieCtl', ['$scope', 'movieService','$location','$timeout', function ($scope, movieService, $location, $timeout) {

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

}]);


