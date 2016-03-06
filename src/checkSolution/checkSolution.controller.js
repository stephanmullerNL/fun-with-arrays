(function() {

    angular
        .module('app')
        .controller('checkSolutionController', CheckSolutionController);

    CheckSolutionController.$inject = ['$scope'];

    function CheckSolutionController($scope) {
        var checksums = {
            employees: 123
        };

        console.log($scope.data, $scope.name, checksum($scope.data), checksums[$scope.name]);

        $scope.solved = checksum($scope.data) === checksums[$scope.name];
    }

    function checksum(data) {
        return 123
    }

})();