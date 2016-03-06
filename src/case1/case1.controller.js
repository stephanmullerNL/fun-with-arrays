(function() {

    angular.module('app')
        .controller('case1Controller', Case1Controller);

    Case1Controller.$inject = ['$scope', 'colors'];

    function Case1Controller($scope, colors) {
        // Output the raw data to help you debug :)
        $scope.rawdata = colors;


        // Modify this to return each color in uppercase
        $scope.colorsUppercase = colors;


        // Modify this to double each color name
        // (don't forget there's a helper function "doubleString" below)
        $scope.colorsDouble = colors;


        // Modify this to turn each color name into an object, where the key
        // is the color name and the value is the length of the name
        $scope.colorLengths = colors;


    }

    function doubleString(str) {
        return str + str;
    }

})();