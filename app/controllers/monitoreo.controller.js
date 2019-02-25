angular.module('app-cmpc')
    .controller("MonitoreoController", ["$scope", '$location', 'NgMap' ,'$rootScope' , function($scope, $location, NgMap, $rootScope) {

        console.log('MonitoreoCOntroller');

        var vm = $scope;

        vm.suelos = [
            {address: "-37.134478, -71.761973", nombre_suelo: "Trumao", id_suelo:1, 'class': 'my1'},
            {address: "-37.828622, -72.301612", nombre_suelo: 'Rojo arcilloso', id_suelo:2, 'class': 'my1'},
            {address: "-37.486463, -72.727067", nombre_suelo: "Granítico", id_suelo:3,'class': 'my1'},
            {address: "-36.999016, -72.322901", nombre_suelo: 'Arenoso', id_suelo:4, 'class': 'my1'},
            {address: "-36.934489, -73.091400", nombre_suelo: "Metamórfico costero", id_suelo:5, 'class': 'my1'}
        ];


        vm.hoverEfect = function() {
          this.style.backgroundColor = 'grey';
        };

        vm.mouseoutEfect = function() {
            this.style.backgroundColor = 'white';
        };

        vm.toSuelo = function(suelo_id) {
          console.log(suelo_id);
          switch(suelo_id){
            case(1):
              $location.url("/trumao");
              break;
            case(2):
              $location.url("/rojo-arcilloso");
              break;
            case(3):
              $location.url("/granitico");
              break;
            case(4):
              $location.url("/arenoso");
              break;
            case(5):
              $location.url("/metamorfico");
              break; 
          }
        };
        
    }   
]);