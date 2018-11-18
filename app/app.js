angular.module('app-cmpc',['ngRoute', 'ngResource', 'ngStorage'])
.config(['$routeProvider', function($routeProvider) { 
    $routeProvider
        .when('/',{
            templateUrl: '/test_cmpc/cmpc/app/templates/index.template.html',
            controller: 'testController'
        })
}]);