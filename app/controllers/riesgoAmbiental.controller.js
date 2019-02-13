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
                herbicida:  'Simazina',
                trumao_briggs:  '0,09',
                trumao_hamaker:  '0,11',
                trumao_gus: '4,73',
                rojo_arcilloso_briggs:  '0,09',
                rojo_arcilloso_hamaker: '0,18',
                rojo_arcilloso_gus: '4,90',
                granitico_briggs:   '0,09',
                granitico_hamaker:  '0,09',
                granitico_gus:  '3,96',
                arenoso_briggs: '0,9',
                arenoso_hamaker:    '0,49',
                arenoso_gus:    '4,94',
                metamorfico_briggs: '0,09',
                metamorfico_hamaker: '0,07',
                metamorfico_gus: '44,6'   
            },
            {
                herbicida:  'Terbutilazina',
                trumao_briggs:  '0,03',
                trumao_hamaker:  '0,02',
                trumao_gus: '3,26',
                rojo_arcilloso_briggs:  '0,03',
                rojo_arcilloso_hamaker: '0,03',
                rojo_arcilloso_gus: '3,42',
                granitico_briggs:   '0,03',
                granitico_hamaker:  '0,01',
                granitico_gus:  '2,30',
                arenoso_briggs: '0,03',
                arenoso_hamaker:    '0,06',
                arenoso_gus:    '3,03',
                metamorfico_briggs: '0,03',
                metamorfico_hamaker: '0,01',
                metamorfico_gus: '2,89' 
            },
            {
                herbicida:  'Hexazinona',
                trumao_briggs:  '0,29',
                trumao_hamaker:  '0,19',
                trumao_gus: '5,55',
                rojo_arcilloso_briggs:  '0,29',
                rojo_arcilloso_hamaker: '0,25',
                rojo_arcilloso_gus: '5,73',
                granitico_briggs:   '0,29',
                granitico_hamaker:  '0,13',
                granitico_gus:  '4,68',
                arenoso_briggs: '0,29',
                arenoso_hamaker:    '0,41',
                arenoso_gus:    '5,18',
                metamorfico_briggs: '0,29',
                metamorfico_hamaker: '0,10',
                metamorfico_gus: '5,24' 
            },
            {
                herbicida:  'Metsulfuronmetil',
                trumao_briggs:  '0,94',
                trumao_hamaker:  '',
                trumao_gus: '',
                rojo_arcilloso_briggs:  '0,94',
                rojo_arcilloso_hamaker: '',
                rojo_arcilloso_gus: '',
                granitico_briggs:   '0,94',
                granitico_hamaker:  '',
                granitico_gus:  '',
                arenoso_briggs: '0,94',
                arenoso_hamaker:    '',
                arenoso_gus:    '',
                metamorfico_briggs: '0,94',
                metamorfico_hamaker: '',
                metamorfico_gus: '' 
            },
            {
                herbicida:  'Tricolpir',
                trumao_briggs:  '0,01',
                trumao_hamaker:  '',
                trumao_gus: '',
                rojo_arcilloso_briggs:  '0,01',
                rojo_arcilloso_hamaker: '',
                rojo_arcilloso_gus: '',
                granitico_briggs:   '0,01',
                granitico_hamaker:  '',
                granitico_gus:  '',
                arenoso_briggs: '0,01',
                arenoso_hamaker:    '',
                arenoso_gus:    '',
                metamorfico_briggs: '0,01',
                metamorfico_hamaker: '',
                metamorfico_gus: '' 
            },
            {
                herbicida:  'Glifosato',
                trumao_briggs:  '0,98',
                trumao_hamaker:  '',
                trumao_gus: '',
                rojo_arcilloso_briggs:  '0,98',
                rojo_arcilloso_hamaker: '',
                rojo_arcilloso_gus: '',
                granitico_briggs:   '0,98',
                granitico_hamaker:  '',
                granitico_gus:  '',
                arenoso_briggs: '0,98',
                arenoso_hamaker: '',
                arenoso_gus:    '',
                metamorfico_briggs: '0,98',
                metamorfico_hamaker: '',
                metamorfico_gus: '' 
            },
            {
                herbicida:  'Indaziflan',
                trumao_briggs:  '0,05',
                trumao_hamaker:  '0,00',
                trumao_gus: '0,69',
                rojo_arcilloso_briggs:  '0,05',
                rojo_arcilloso_hamaker: '0,00',
                rojo_arcilloso_gus: '0,45',
                granitico_briggs:   '0,05',
                granitico_hamaker:  '0,00',
                granitico_gus:  '0,49',
                arenoso_briggs: '0,05',
                arenoso_hamaker:    '0,02',
                arenoso_gus:    '2,53',
                metamorfico_briggs: '0,05',
                metamorfico_hamaker: '0,00',
                metamorfico_gus: '0,74' 
            },
            {
                herbicida:  'Flazasulfuron',
                trumao_briggs:  '0,64',
                trumao_hamaker:  '',
                trumao_gus: '',
                rojo_arcilloso_briggs:  '0,64',
                rojo_arcilloso_hamaker: '',
                rojo_arcilloso_gus: '',
                granitico_briggs:   '0,64',
                granitico_hamaker:  '',
                granitico_gus:  '',
                arenoso_briggs: '0,64',
                arenoso_hamaker:    '',
                arenoso_gus:    '',
                metamorfico_briggs: '0,64',
                metamorfico_hamaker: '',
                metamorfico_gus: '' 
            },
            {
                herbicida:  'Fluroxipir',
                trumao_briggs:  '0,61',
                trumao_hamaker:  '',
                trumao_gus: '',
                rojo_arcilloso_briggs:  '0,61',
                rojo_arcilloso_hamaker: '',
                rojo_arcilloso_gus: '',
                granitico_briggs:   '0,61',
                granitico_hamaker:  '',
                granitico_gus:  '',
                arenoso_briggs: '0,61',
                arenoso_hamaker:    '',
                arenoso_gus:    '',
                metamorfico_briggs: '0,61',
                metamorfico_hamaker: '',
                metamorfico_gus: '' 
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