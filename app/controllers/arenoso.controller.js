angular.module('app-cmpc')
    .controller("ArenosoController", ["$scope", '$location', 'NgMap' ,'$rootScope' , function($scope, $location, NgMap, $rootScope) {

        console.log('ArenosoController');

        var vm = $scope;

        vm.suelo = {address: "-36.999016, -72.322901", nombre_suelo: 'Arenoso', id_suelo:4, 'class': 'my1'};

    }   
]);