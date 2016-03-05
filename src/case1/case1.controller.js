(function() {

    angular.module('app')
        .controller('case1Controller', Case1Controller);

    function Case1Controller($scope) {
        var allEmployees;

        $scope.case1 = function () {
            var employees = allEmployees;

            // do your magic here


            // output the results
            $scope.employees = employees;


            // switch to the right view
            $scope.case = 1;
            console.log($scope.case);
        };


        function init() {
            console.log('case 1');
        }

        init();
    }

})();