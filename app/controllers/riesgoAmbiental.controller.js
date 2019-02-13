angular.module('app-cmpc')
    .controller("RiesgoAmbientalCtrl", ["$scope", '$location', function($scope, $location) {
        console.log('Riesgos CTRL');

        //Tabla 1 Herbicida kd
        $scope.jsonTableHerbicidaKD = [
            {
                herbicida:  'Simazina',
                trumao_kd:  '1.9',
                truma_per:  '48,2',
                rojo_arcilloso_kd:  '1,1',
                rojo_arcilloso_per: '63,1',
                granitico_kd:   '2,4',
                granitico_per:  '49,1',
                arenoso_kd: '0,3',
                arenoso_per:    '91,6',
                metamorfico_kd: '3,4',
                metamorfico_per: '40,0'
            },
            {
                herbicida:  'Terbutilazina',
                trumao_kd:  '15,6',
                truma_per:  '18,4',
                rojo_arcilloso_kd:  '9,0',
                rojo_arcilloso_per: '24,4',
                granitico_kd:   '23,4',
                granitico_per:  '12,5',
                arenoso_kd: '3,6',
                arenoso_per:    '43,1',
                metamorfico_kd: '30,4',
                metamorfico_per: '9,5'
            },
            {
                herbicida:  'Hexazinona',
                trumao_kd:  '1,3',
                truma_per:  '50,2',
                rojo_arcilloso_kd:  '0,7',
                rojo_arcilloso_per: '63,7',
                granitico_kd:   '1,6',
                granitico_per:  '49,8',
                arenoso_kd: '0,3',
                arenoso_per:    '47,3',
                metamorfico_kd: '2,3',
                metamorfico_per: '45,5'
            },
            {
                herbicida:  'Metsulfuronmetil',
        
            },
            {
                herbicida:  'Tricolpir'
            },
            {
                herbicida:  'Glifosato'
            },
            {
                herbicida:  'Indaziflan',
                trumao_kd:  '421,7',
                truma_per:  '11,9',
                rojo_arcilloso_kd:  '388,4',
                rojo_arcilloso_per: '11,4',
                granitico_kd:   '240,5',
                granitico_per:  '7,8',
                arenoso_kd: '10,5',
                arenoso_per:    '22,2',
                metamorfico_kd: '500,4',
                metamorfico_per: '7,8'
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