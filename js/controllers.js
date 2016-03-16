angular.module('ePortfolio')
    .controller('portfolioCtrl', function ($scope, $state) {
        $scope.portfolioCtrl = 'PORTFOLIO';
    });

angular.module('ePortfolio')
    .controller('aboutmeCtrl', function ($scope, $state) {
        $scope.aboutmeCtrl = 'ABOUTME';
    });

angular.module('ePortfolio')
    .controller('contactmeCtrl', function ($scope, $state) {
        $scope.contactmeCtrl = 'CONTACTME';
    });

angular.module('ePortfolio')
    .controller('resumeCtrl', function ($scope, $state) {
        $scope.resumeCtrl = 'RESUME';
    });