(function() {

    'use strict';

    angular
        .module('app')
        .directive('checkSolution', CheckSolutionDirective);

    function CheckSolutionDirective() {
        return {
            restrict: 'A',
            scope: {
                data: '=checkSolution',
                name: '@'
            },
            controller: 'checkSolutionController',
            controllerAs: 'checkSolution'
        };
    }

})();