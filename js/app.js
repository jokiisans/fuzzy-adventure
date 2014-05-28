var fuzzyApp = angular.module('fuzzyApp', ['ngRoute']);

    fuzzyApp.config(function ($routeProvider){
        
       $routeProvider
       .when('/',{
           
           controller:'',
           templateUrl:'index.html';
           
       })
       .otherwise({redirectTo: 'index.html'});
        
        
    });