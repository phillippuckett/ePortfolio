angular.module('ePortfolio', ['ui.router'])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('portfolio', {
                url: '/portfolio',
                templateUrl: '/portfolio.html',
                controller: 'portfolioCtrl'
            })
        // $urlRouterProvider.otherwise('/portfolio');
    });