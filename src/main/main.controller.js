(function() {

    angular.module('app')
        .controller('mainController', MainController);

    MainController.$inject = ['$scope', 'employees'];

    function MainController($scope, employees) {


        $scope.test = employees;

        function init() {

        }

        init();
    }

})();
