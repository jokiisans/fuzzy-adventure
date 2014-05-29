var fuzzyApp = angular.module('fuzzyApp', ['ngRoute', 'ui.bootstrap','basic_controllers']);

    fuzzyApp.config(function ($routeProvider){
        
       $routeProvider
       .when('/',{
           
           controller:'',
           templateUrl:'partials/home.html'
           
       })
       .when('/home',{
           controller:'',
           templateUrl:'partials/home.html'
       })
       .when('/fuzzy',{
           controller:'',
           templateUrl:'partials/fuzzy.html'
       })
       .when('/fuzzier',{
           controller:'',
           templateUrl:'partials/fuzzier.html'
       })
       .otherwise({redirectTo: 'partials/home.html'});
        
        
    });