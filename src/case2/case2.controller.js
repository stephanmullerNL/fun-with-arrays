(function() {

    'use strict';

    angular.module('app')
        .controller('case2Controller', Case2Controller);

    Case2Controller.$inject = ['$scope', 'movies'];

    function Case2Controller($scope, movies) {
        // Output the raw data to help you debug :)
        $scope.rawdata = movies;


        $scope.chronological = movies.slice(0);

        $scope.favorites = movies;

        $scope.badMovies = movies;
    }


})();