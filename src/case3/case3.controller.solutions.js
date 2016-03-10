(function () {

    'use strict';

    angular.module('app')
        .controller('_case3Controller', Case3Controller);

    Case3Controller.$inject = ['$scope', 'groceries'];

    function Case3Controller($scope, groceries) {
        $scope.rawdata = groceries;


        $scope.totalPrice = groceries.reduce(function (total, current) {
            return total + current.price * current.amount;
        }, 0);


        $scope.totalDiscount = groceries.filter(function (i) {
            return i.hasOwnProperty('discount');
        }).reduce(function (total, current) {
            return total + current.amount * current.discount;
        }, 2.5);


        $scope.allItems = groceries.reduce(function (list, current) {
            var amount = current.unit === 'single' ? current.amount : 1;

            while (amount-- > 0) {
                list.push(current.name);
            }

            return list;
        }, []);
    }

})();