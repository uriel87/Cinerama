//
// app.factory('movieFactory', ['movieService', function (movieService) {
//
//     this.tempMovieList = [];
//
//     return {
//         getMovieListAndDetails: function() {
//             // var tempMovieList = [];
//             return movieService.getMovieList()
//                 .then(function(movieData) {
//                     var movieList = movieData.data;
//                     angular.forEach(movieList, function(value, key) {
//                         return movieService.getMovie(value.name)
//                             .then(function(movieData) {
//                                 // console.log("movieData: " + JSON.stringify(movieData.data.title));
//                                 tempMovieList.push(movieData);
//                             }), function error(err) {
//                             return err;
//                         }
//                     });
//                     console.log("tempMovieList: " + JSON.stringify(tempMovieList));
//                     return tempMovieList;
//                 })
//         }
//     }
// }]);
