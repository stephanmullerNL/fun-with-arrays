(function() {

    angular.module('app')
        .controller('mainController', MainController);

    MainController.$inject = ['$scope', '$sce', 'employeeService', 'helpers'];

    function MainController($scope, $sce, employeeService, helpers) {

        function init() {
            var allEmployees;

            employeeService.get().then(function (data) {
                allEmployees = data;

                $scope.prettyJson = $sce.trustAsHtml(helpers.prettyJson(allEmployees));
            });

        }

        init();
    }

})();
