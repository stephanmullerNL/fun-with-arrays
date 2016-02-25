var angular = require('angular'),
    MainController = require('./main.controller'),
    EmployeeService = require('./employees.service');

angular.module('app', [])
    .controller('mainController', MainController)
    .factory('employeeService', EmployeeService);
