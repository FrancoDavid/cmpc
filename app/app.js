
var configApp = function($routeProvider){
    $routeProvider
        .when('/',{
            templateUrl: './app/templates/index.template.html',
            controller: 'testController'
        })
};
 
var app = angular.module('app-cmpc',['ngRoute', 'ngResource', 'ngStorage'])

app.config(configApp)
app.directive('navBar', NavBar);
