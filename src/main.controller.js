module.exports = MainController;

MainController.$inject = ['employeeService'];

function MainController(employeeService) {

    employeeService.get().then(function(employees) {
        console.log(employees);
    });

}