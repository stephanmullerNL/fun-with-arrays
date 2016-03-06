(function() {

    angular
        .module('app')
        .directive('checkSolution', CheckSolutionDirective);

    function CheckSolutionDirective() {
        return {
            restrict: 'E',
            templateUrl: 'checkSolution/checkSolution.html',
            scope: {
                data: '=',
                name: '@'
            },
            controller: 'checkSolutionController',
            controllerAs: 'checkSolution'
        }
    }

})();