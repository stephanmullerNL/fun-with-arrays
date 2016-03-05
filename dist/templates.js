angular.module('app')
  .run(['$templateCache', function($templateCache) {
    $templateCache.put('case1/case1.html',
    '<h2>Case 1: Apeldoorn medewerkers</h2>\n' +
    '<ul>\n' +
    '    <li class="employee" ng-repeat="employee in employees">\n' +
    '        {{employee.firstname}} {{employee.lastname}} ({{employee.job}}, {{employee.location}})\n' +
    '    </li>\n' +
    '</ul>\n' +
    '')
  $templateCache.put('main/main.html',
    'Welkom!')

  }]);
