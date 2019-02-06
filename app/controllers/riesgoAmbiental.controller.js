angular.module('app-cmpc')
    .controller("RiesgoAmbientalCtrl", ["$scope", '$location', function($scope, $location) {
        console.log('Riesgos CTRL');

        //Tabla 1 Herbicida kd
        $scope.jsonTableHerbicidaKD = [
            {
                herbicida:  'Simazina'
            },
            {
                herbicida:  'Terbutilazina'
            },
            {
                herbicida:  'Hexazinona'
            },
            {
                herbicida:  'Metsulfuronmetil'
            },
            {
                herbicida:  'Tricolpir'
            },
            {
                herbicida:  'Glifosato'
            },
            {
                herbicida:  'Indaziflan'
            },
            {
                herbicida:  'Flazasulfuron'
            },
            {
                herbicida:  'Fluroxipir'
            }
        ];
        //Tabla 2 Herbicidas K
        $scope.jsonTableHerbicidaK = [
            {
                herbicida:  'Simazina'
            },
            {
                herbicida:  'Terbutilazina'
            },
            {
                herbicida:  'Hexazinona'
            },
            {
                herbicida:  'Metsulfuronmetil'
            },
            {
                herbicida:  'Tricolpir'
            },
            {
                herbicida:  'Glifosato'
            },
            {
                herbicida:  'Indaziflan'
            },
            {
                herbicida:  'Flazasulfuron'
            },
            {
                herbicida:  'Fluroxipir'
            }
        ];

        //Tablas 3 herbicidas lixiviación
        $scope.jsonTableHerbicidaLixiviacion = [
            {
                herbicida:  'Simazina'
            },
            {
                herbicida:  'Terbutilazina'
            },
            {
                herbicida:  'Hexazinona'
            },
            {
                herbicida:  'Metsulfuronmetil'
            },
            {
                herbicida:  'Tricolpir'
            },
            {
                herbicida:  'Glifosato'
            },
            {
                herbicida:  'Indaziflan'
            },
            {
                herbicida:  'Flazasulfuron'
            },
            {
                herbicida:  'Fluroxipir'
            }
        ];

        //Tablas 4 herbicidas lisímetros
        $scope.jsonTableHerbicidaLisimetros = [
            {
                herbicida:  'Simazina'
            },
            {
                herbicida:  'Terbutilazina'
            },
            {
                herbicida:  'Hexazinona'
            },
            {
                herbicida:  'Metsulfuronmetil'
            },
            {
                herbicida:  'Tricolpir'
            },
            {
                herbicida:  'Glifosato'
            },
            {
                herbicida:  'Indaziflan'
            },
            {
                herbicida:  'Flazasulfuron'
            },
            {
                herbicida:  'Fluroxipir'
            }
        ];

        //Tablas 5 herbicidas IRA
        $scope.jsonTableHerbicidaIRA = [
            {
                herbicida:  'Simazina'
            },
            {
                herbicida:  'Terbutilazina'
            },
            {
                herbicida:  'Hexazinona'
            },
            {
                herbicida:  'Metsulfuronmetil'
            },
            {
                herbicida:  'Tricolpir'
            },
            {
                herbicida:  'Glifosato'
            },
            {
                herbicida:  'Indaziflan'
            },
            {
                herbicida:  'Flazasulfuron'
            },
            {
                herbicida:  'Fluroxipir'
            }
        ];


    }   
]);