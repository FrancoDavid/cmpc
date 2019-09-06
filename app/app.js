
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




var app = angular.module('app-cmpc',['ngRoute', 'ngResource', 'ngStorage', 'ngMap', 'ngAnimate', 'firebase']);

/* var firebaseConfig = {
    apiKey: "AIzaSyDzmzjDas7RHyIeumKSALUIqxrJm8K5yEw",
    authDomain: "testta-e3a69.firebaseapp.com",
    databaseURL: "https://testta-e3a69.firebaseio.com",
    projectId: "testta-e3a69",
    storageBucket: "testta-e3a69.appspot.com",
    messagingSenderId: "372971739910",
    appId: "1:372971739910:web:2460eadbaf16946c"
  };

  // Initialize Firebase
firebase.initializeApp(firebaseConfig);


var ref = firebase.database().ref();

console.log(ref); */


app.config(configApp);

/* app.factory("Auth", function($firebaseAuth){
	return $firebaseAuth(ref);
}); */

app.run(function ($rootScope, $timeout, $window) {

    $rootScope.status_login = false;

    $rootScope.$on('$routeChangeSuccess', function () {
        $timeout(function () {
            $window.scrollTo(0, 0);
        }, 500);
    });
});
app.directive('navBar', NavBar);
app.directive('footerApp', Footer);
