(function() {

    angular.module('app')
        .controller('case3Controller', Case3Controller);

    Case3Controller.$inject = ['$scope', 'employees'];

    function Case3Controller($scope, employees) {

        var apeldoornEmployees = employees,
            totalAge;

        // do your magic here




        // output the results
        $scope.employees = apeldoornEmployees;
        $scope.totalAge = totalAge;

    }

})();