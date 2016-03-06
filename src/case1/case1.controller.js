(function() {

    angular.module('app')
        .controller('case1Controller', Case1Controller);

    Case1Controller.$inject = ['$scope', 'colors'];

    function Case1Controller($scope, colors) {
        // Output the raw data to help you debug
        $scope.rawdata = colors;


        $scope.colorsUppercase = colors;


        $scope.colorLengths = colors.map(function(color) {
            var obj = {};

            obj[color] = color.length;

            return obj;
        });


    }

})();