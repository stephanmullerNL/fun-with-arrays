(function() {

    angular.module('app')
        .controller('case3Controller', Case3Controller);

    Case3Controller.$inject = ['$scope', 'groceries'];

    function Case3Controller($scope, groceries) {
        $scope.rawdata = groceries;


        $scope.totalPrice = 0;

        $scope.totalDiscount = 0;

        $scope.allItems = [];
    }

})();