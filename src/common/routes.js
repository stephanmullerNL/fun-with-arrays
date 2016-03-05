(function() {

    angular
        .module('app')
        .config(routes);

    routes.$inject = ['$stateProvider', '$urlRouterProvider'];

    function routes($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('main', {
                url: '/',
                templateUrl: 'main/main.html',
                controller: 'mainController as mainCtrl'

            })
            .state('case3', {
                url: '/case3',
                templateUrl: 'case3/case3.html',
                controller: 'case3Controller as case1Ctrl',
                resolve: {
                    employees: ['employeeService', function(employeeService) {
                        return employeeService.get();
                    }]
                }
            })
    }

})();
