MainController.$inject = ['$scope', '$sce', 'employeeService'];

function MainController($scope, $sce, employeeService) {

    function listEmployees() {

        employeeService.get().then(function (data) {
            var employees;

            // do some magic here
            employees = data;


            // display the result
            $scope.employees = employees;
            $scope.prettyJson = $sce.trustAsHtml(highlightJson(employees));
        });
    }


    // prettify the json data by adding some classes
    // stolen from StackOverflow obviously
    function highlightJson(json) {
        var jsonRegex = /("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g;

        if (typeof json !== 'string') {
            json = JSON.stringify(json, undefined, 2);
        }

        json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

        return json.replace(jsonRegex, function (match) {
            var cls = 'number';

            if (/^"/.test(match)) {

                if (/:$/.test(match)) {
                    cls = 'key';
                } else {
                    cls = 'string';
                }

            } else if (/true|false/.test(match)) {
                cls = 'boolean';

            } else if (/null/.test(match)) {
                cls = 'null';
            }

            return '<span class="' + cls + '">' + match + '</span>';
        });
    }

    listEmployees();
}

module.exports = MainController;