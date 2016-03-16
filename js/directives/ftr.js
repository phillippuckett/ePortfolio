angular.module("ePortfolio")
    .directive("ftrDir", function () {
        return {
            restrict: 'E',
            templateUrl: 'html/ftr.html',
            controller: function ($scope) {
                $scope.ftrDir = "FOOTER DIRECTIVE"
                var currentyear = new Date().getFullYear();
                $scope.year = currentyear.toString();
            }
        }
    });