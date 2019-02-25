angular.module('app-cmpc')
    .controller("TrumaoController", ["$scope", '$location', 'NgMap' ,'$rootScope' , function($scope, $location, NgMap, $rootScope) {

        console.log('trumaoController');

        var vm = $scope;

        vm.suelo = {address: "-37.134478, -71.761973", nombre_suelo: "Trumao", id_suelo:'1', 'class': 'my1'};

    }   
]);