(function() {

    angular.module('app')
        .controller('case4Controller', Case4Controller);

    Case4Controller.$inject = ['$scope', 'employees'];

    function Case4Controller($scope, employees) {

        var apeldoornEmployees = employees,
            totalAge;

        // do your magic here




        // output the results
        $scope.employees = apeldoornEmployees;
        $scope.totalAge = totalAge;

    }

})();