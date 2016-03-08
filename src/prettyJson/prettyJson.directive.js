(function() {

    'use strict';

    angular
        .module('app')
        .directive('prettyJson', PrettyJsonDirective);

    function PrettyJsonDirective() {
        return {
            restrict: 'E',
            templateUrl: 'prettyJson/prettyJson.html',
            scope: {
                data: '=',
                name: '@'
            },
            controller: 'prettyJsonController',
            controllerAs: 'prettyJson'
        };
    }

})();