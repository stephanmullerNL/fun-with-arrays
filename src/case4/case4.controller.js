(function() {

    'use strict';

    angular.module('app')
        .controller('case4Controller', Case4Controller);

    Case4Controller.$inject = ['$scope', 'employees'];

    function Case4Controller($scope, employees) {

        var _ = require('lodash');

        $scope.employees = employees;

        $scope.apeldoornFE = employees;

        $scope.totalAge = 0;

    }

})();