
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
        .when('/trumao',{
            templateUrl: './app/templates/trumao.template.html'
        })
        .when('/arenoso',{
            templateUrl: './app/templates/arenoso.template.html'
        })
        .when('/granitico',{
            templateUrl: './app/templates/granitico.template.html'
        })
        .when('/metamorfico',{
            templateUrl: './app/templates/metamorfico.template.html'
        })
        .when('/rojo-arcilloso',{
            templateUrl: './app/templates/rojoArcilloso.template.html'
        })

        //este es digamos, al igual que en un switch el default, en caso que 
        //no hayamos concretado que nos redirija a la página principal
        .otherwise({ reditrectTo : "/" });
};
 
var app = angular.module('app-cmpc',['ngRoute', 'ngResource', 'ngStorage', 'ngMap', 'ngAnimate']);

app.config(configApp);
app.run(function ($rootScope, $timeout, $window) {
    $rootScope.$on('$routeChangeSuccess', function () {
        $timeout(function () {
            $window.scrollTo(0, 0);
        }, 500);
    });
});
app.directive('navBar', NavBar);
app.directive('footerApp', Footer);
