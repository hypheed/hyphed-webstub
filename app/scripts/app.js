'use strict';

/**
 * @ngdoc overview
 * @name hypheedWebstubApp
 * @description
 * # hypheedWebstubApp
 *
 * Main module of the application.
 */
angular .module('hypheedWebstubApp', ['ui.router', 'ngResource'])
        .config(function($stateProvider, $urlRouterProvider) {

            $stateProvider
                // route for the home page
                .state('app', {
                    url: '/',
                    views: {
                        'header': {
                            templateUrl : 'views/header.html',
                        },
                        'content': {
                            templateUrl : 'views/home.html'
                        },
                        'footer': {
                            templateUrl : 'views/footer.html',
                        }
                    }
                });

            $urlRouterProvider.otherwise('/');
        });
