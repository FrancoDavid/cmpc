
var configApp = function($routeProvider){
    $routeProvider
        .when('/',{
            templateUrl: './app/templates/index.template.html'
        })
        .when('/sobre-nosotros',{
            templateUrl: './app/templates/sobre-nosotros.template.html'
        })
        .when('/metodologia',{
            templateUrl: './app/templates/metodologia.template.html'
        })
        .when('/resultados',{
            templateUrl: './app/templates/resultados.template.html'
        })
        .when('/riesgo-ambiental',{
            templateUrl: './app/templates/riesgo-ambiental.template.html'
        })
        .when('/monitoreo',{
            templateUrl: './app/templates/monitoreo.template.html'
        })

        //este es digamos, al igual que en un switch el default, en caso que 
        //no hayamos concretado que nos redirija a la página principal
        .otherwise({ reditrectTo : "/" });
};
 
var app = angular.module('app-cmpc',['ngRoute', 'ngResource', 'ngStorage'])

app.config(configApp)
app.directive('navBar', NavBar);
app.directive('footer', Footer)
