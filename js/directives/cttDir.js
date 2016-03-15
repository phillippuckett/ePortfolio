angular.module("ePortfolio")
    .directive("cttDir", function () {
        return {
            restrict: 'E',
            templateUrl: 'html/ctt.html',
            controller: function ($scope) {
                $scope.cttDir = 'CONTACT DIRECTIVE'
            }
          
        }
    });