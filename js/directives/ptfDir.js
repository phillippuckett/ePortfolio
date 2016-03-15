angular.module("ePortfolio")
    .directive("ptfDir", function () {
        return {
            restrict: 'E',
            templateUrl: 'html/ptf.html',
            controller: function ($scope) {
                $scope.ptfDir = 'PORTFOLIO DIRECTIVE'
            }
          
        }
    });