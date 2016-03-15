angular.module('ePortfolio', ['ui.router'])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('portfolio', {
                url: '/portfolio',
                templateUrl: '/ptf.html',
                controller: 'ptfCtrl'
            })

        $urlRouterProvider.otherwise('/portfolio');
    });