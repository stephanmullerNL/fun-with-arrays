(function() {

    angular.module('app')
        .factory('employeeService', EmployeeService);

    EmployeeService.$inject = ['$http'];

    function EmployeeService ($http) {

        'use strict';

        return {
            get: getEmployees
        };

        function getEmployees() {
            return $http.get('./data/employees.json')
                .then(function(response) {
                    return response.data;
                });
        }

    }

})();