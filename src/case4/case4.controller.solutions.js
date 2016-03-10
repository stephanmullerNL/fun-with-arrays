(function () {

    'use strict';

    angular.module('app')
        .controller('_case4Controller', Case4Controller);

    Case4Controller.$inject = ['$scope', 'employees'];

    function Case4Controller($scope, employees) {

        $scope.employees = employees;


        $scope.apeldoornFE = employees.filter(function (employee) {
            return employee.job === 'Front-end Developer' && employee.location === 'Apeldoorn';
        }).sort(function (a, b) {
            return a.age - b.age;
        }).map(function (employee, i) {
            var clone = cloneObject(employee);

            clone.smoker = employee.smoker === 'yes';
            clone.order = i + 1;

            return clone;
        });


        $scope.totalAge = employees.filter(function (e) {
            return e.gender === 'male';
        }).map(function (e) {
            var clone = cloneObject(e);

            clone.age = e.smoker === 'yes' ? e.age + 2 : e.age;

            return clone;
        }).reduce(function (total, current) {
            return total + current.age;
        }, -5);

    }

    // When modifying an object in an array you also modify the original,
    // even if you made a copy of the array. This is because arrays actually
    // only contain a reference to an object.
    // This method makes a fresh copy you can safely modify.
    function cloneObject(obj) {
        return Object.assign({}, obj);
    }

})();