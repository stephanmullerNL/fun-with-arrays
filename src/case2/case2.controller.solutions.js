(function () {

    'use strict';

    angular.module('app')
        .controller('_case2Controller', Case2Controller);

    Case2Controller.$inject = ['$scope', 'movies'];

    function Case2Controller($scope, movies) {

        // Output the raw data to help you debug :)
        $scope.rawdata = movies;


        $scope.chronological = movies.slice(0).sort(function (a, b) {
            return a.year - b.year;
        });


        // No slice is needed here, because "filter" already returns
        // a new list. Sorting doesn't affect the original list.
        // Thanks for pointing that out Kevin ;)
        $scope.favorites = movies.filter(function (movie) {
            return movie.rating >= 8;
        }).sort(function (a, b) {
            return b.rating - a.rating;
        });


        // Same here
        $scope.badMovies = movies.filter(function (movie) {
            return movie.rating < 6 && movie.year % 2 === 0;
        }).sort(function (a, b) {
            if (a.title > b.title) return 1;
            if (a.title < b.title) return -1;
            return 0;
        });
    }


})();