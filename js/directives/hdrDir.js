angular.module("ePortfolio")
    .directive("hdrDir", function () {
        return {
            restrict: 'E',
            templateUrl: 'html/hdr.html',
            controller: function ($scope) {
                $scope.hdrDir = 'HEADER DIRECTIVE'
            }
          
        }
    });