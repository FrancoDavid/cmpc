angular.module('app-cmpc')
    .controller("RojoArcillosoController", ["$scope", '$location', 'NgMap' ,'$rootScope' , function($scope, $location, NgMap, $rootScope) {

        console.log('RojoArcillosoController');

        var vm = $scope;

        vm.suelo = {address: "-37.828622, -72.301612", nombre_suelo: 'Rojo arcilloso', id_suelo:2, 'class': 'my1'};

    }   
]);