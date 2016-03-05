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
            .state('case1', {
                url: '/case1',
                templateUrl: 'case1/case1.html',
                controller: 'case1Controller as case1Ctrl'
            })
    }

})();
