var helpers = require('./helpers');

MainController.$inject = ['$scope', '$sce', 'employeeService'];

function MainController($scope, $sce, employeeService) {
    var allEmployees;

    $scope.case1 = function() {
        var employees = allEmployees;

        // do your magic here



        // output the results
        $scope.employees = employees;

        // output the raw data
        $scope.prettyJson = $sce.trustAsHtml(helpers.prettyJson(employees));

        // switch to the right view
        $scope.case = 1;
        console.log($scope.case);
    };




    function init() {
        employeeService.get().then(function (data) {
            allEmployees = data;
        });
    }

    init();
}

module.exports = MainController;