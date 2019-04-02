angular.module('app-cmpc')
    .controller("GraniticoController", ["$scope", '$location', 'NgMap' ,'$rootScope' , function($scope, $location, NgMap, $rootScope) {

        console.log('GraniticoController');
        $scope.suelo = {address: "-37.486463, -72.727067", nombre_suelo: "Granítico", id_suelo:3,'class': 'my1'};

    }   
]);