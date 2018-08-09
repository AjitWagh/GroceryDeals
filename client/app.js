'use strict';

var App = angular.module('groceryDealsApp',['ui.router','appIndex']);

App.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
    $stateProvider
        .state('app', {
            url: "/app",
            abstract: true
        });
    $urlRouterProvider.otherwise("/app/dashboard");

}]);