angular.module("ePortfolio")
    .directive("ftrDir", function () {
        return {
            restrict: 'E',
            templateUrl: 'html/ftr.html',
            controller: function ($scope) {
                $scope.ftrDir = 'FOOTER DIRECTIVE'
            }
          
        }
    });