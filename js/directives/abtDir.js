angular.module("ePortfolio")
    .directive("abtDir", function () {
        return {
            restrict: 'E',
            templateUrl: 'html/abt.html',
            controller: function ($scope) {
                $scope.abtDir = 'ABOUT DIRECTIVE'
            }
          
        }
    });