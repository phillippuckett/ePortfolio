angular.module("ePortfolio")
    .directive("headerDir", function () {
        return {
            restrict: 'E',
            templateUrl: 'html/header.html',
            controller: function ($scope) {
                $scope.headerDir = "HEADER DIRECTIVE";
            }
        }
    });

angular.module("ePortfolio")
    .directive("footerDir", function () {
        return {
            restrict: 'E',
            templateUrl: 'html/footer.html',
            controller: function ($scope) {
                $scope.footerDir = "FOOTER DIRECTIVE";
                var currentyear = new Date().getFullYear();
                $scope.year = currentyear.toString();
            }
        }
    });