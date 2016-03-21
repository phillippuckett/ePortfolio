angular.module('ePortfolio', ['ui.router'])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
        
            .state('aboutme', {
                url: '/aboutme',
                templateUrl: '/html/aboutme.html',
                controller: 'aboutmeCtrl'
            })
                    
            .state('portfolio', {
                url: '/portfolio',
                templateUrl: '/html/portfolio.html',
                controller: 'portfolioCtrl'
            })
                                            
            .state('contactme', {
                url: '/contactme',
                templateUrl: '/html/contactme.html',
                controller: 'contactmeCtrl'
            })
                  
            .state('resume', {
                url: '/resume',
                templateUrl: '/html/resume.html',
                controller: 'resumeCtrl'
            })
            
        $urlRouterProvider.otherwise('/portfolio');
    });