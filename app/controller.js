angular.module('app-cmpc')
    .controller("testController", ["$scope", '$location', 'testService', function($scope, $location,testService) {
        $scope.data = [];
        $scope.saludo = 'Hola ctm!';
        testService.obtenerData().then(function(resultado){
            console.log(resultado);
            $scope.data = resultado.data.datos;
            console.log($scope.data);
        });
    }   
]);