angular.module('app-cmpc')
    .controller("MonitoreoController", ["$scope", '$location', 'NgMap' ,'$rootScope' , function($scope, $location, NgMap, $rootScope) {

        console.log('MonitoreoCOntroller');
        var vm = $scope;

          $rootScope.mouseover = function() {
            console.log('mouseover', this);
            this.style.backgroundColor = 'grey';
          };
          $rootScope.mouseout = function() {
            this.style.backgroundColor = 'white';
          };
          $rootScope.click = function() {console.log('click')};

          $rootScope.customMarkers = [
            {address: "-37.134478, -71.761973", nombre_suelo: "Trumao", 'class': 'my1'},
            {address: "-37.828622, -72.301612", nombre_suelo: 'Rojo arcilloso', 'class': 'my1'},
            {address: "-37.486463, -72.727067", nombre_suelo: "Granítico", 'class': 'my1'},
            {address: "-36.999016, -72.322901", nombre_suelo: 'Arenoso', 'class': 'my1'},
            {address: "-36.934489, -73.091400", nombre_suelo: "Metamórfico costero", 'class': 'my1'}
          ];
    }   
]);