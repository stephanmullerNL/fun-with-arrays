(function() {

    'use strict';

    angular
        .module('app')
        .config(routes);

    routes.$inject = ['$stateProvider', '$urlRouterProvider'];

    function routes($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('main', {
                url: '/',
                templateUrl: 'main/main.html'
            })
            .state('case1', {
                url: '/case1',
                templateUrl: 'case1/case1.html',
                controller: 'case1Controller',
                resolve: {
                    colors: ['dataService', function(dataService) {
                        return dataService.get('colors');
                    }]
                }
            })
            .state('case2', {
                url: '/case2',
                templateUrl: 'case2/case2.html',
                controller: 'case2Controller',
                resolve: {
                    movies: ['dataService', function(dataService) {
                        return dataService.get('movies');
                    }]
                }
            })
            .state('case3', {
                url: '/case3',
                templateUrl: 'case3/case3.html',
                controller: 'case3Controller',
                resolve: {
                    groceries: ['dataService', function(dataService) {
                        return dataService.get('groceries');
                    }]
                }
            })
            .state('case4', {
                url: '/case4',
                templateUrl: 'case4/case4.html',
                controller: 'case4Controller',
                resolve: {
                    employees: ['dataService', function(dataService) {
                        return dataService.get('employees');
                    }]
                }
            });
    }

})();
