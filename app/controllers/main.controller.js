angular.module('app-cmpc')
    .controller("MainController", ["$scope", '$location', 'testService', function($scope, $location,testService) {
        ///Llamada test servicio
        /* $scope.data = [];
        console.log('controller mainn!!');
        testService.obtenerData().then(function(resultado){
            console.log(resultado);
            $scope.data = resultado.data.datos;
            console.log($scope.data);
        });
        */

        console.log('MainCOntroller');

        var vm = $scope;

        vm.toHome = function(){
            $location.url("/");
        };
        vm.toAbout = function(){
            $location.url("/sobre-nosotros");
        };
        vm.toMethod = function(){
            $location.url("/metodologia");
        };
        vm.toResult = function(){
            $location.url("/resultados");
        };
        vm.toActive = function(view_location){
            return (view_location == $location.path());
        };
        vm.toRiesgoAmbiental= function(){
            $location.url("/riesgo-ambiental");
        };
        vm.toMonitoreo= function(){
            $location.url("/monitoreo");
        };
        vm.toActiveProyecto = function(){
            if($location.path() == '/metodologia' || $location.path() == '/resultados'){
                return true;
            } else {
                return false;
            }
        };
        



    }   
]);