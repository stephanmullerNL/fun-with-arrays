var helpers = require('./helpers');

MainController.$inject = ['$scope', '$sce', 'employeeService'];

function MainController($scope, $sce, employeeService) {

    function listEmployees() {

        employeeService.get().then(function (data) {
            var employees;

            // do some magic here
            employees = data;


            // display the result
            $scope.employees = employees;




        $scope.prettyJson = $sce.trustAsHtml(helpers.prettyJson(employees));





        });
    }

    listEmployees();
}

module.exports = MainController;