angular.module('app-cmpc')
    .controller("MetamorficoController", ["$scope", '$location', 'NgMap' ,'$rootScope' , function($scope, $location, NgMap, $rootScope) {

        console.log('MetamorficoController');

        var vm = $scope;

        vm.suelo = {address: "-36.934489, -73.091400", nombre_suelo: "Metamórfico costero", id_suelo:5, 'class': 'my1'};

    }   
]);