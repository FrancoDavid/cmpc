angular.module('app-cmpc')
    .controller("RiesgoAmbientalCtrl", ["$scope", '$location', function($scope, $location) {
        console.log('Riesgos CTRL');
        
        //Cuadro 1 
        /*Coeficientes de adsorción (<i>Kd</i>) y porcentaje de desorción de los
        herbicidas en cada uno de los principales cinco suelos forestales de CMPC.*/
        $scope.jsonTableHerbicidaKD = [
            {
                herbicida:  'Simazina',
                trumao_kd:  '1,9',
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
                herbicida:  'Metsulfuron-metil',
                trumao_kd:  '1,6',
                truma_per:  '66,8',
                rojo_arcilloso_kd:  '2,3',
                rojo_arcilloso_per: '38,1',
                granitico_kd:   '12,6',
                granitico_per:  '23,6',
                arenoso_kd: '1,9',
                arenoso_per:    '52,2',
                metamorfico_kd: '14,3',
                metamorfico_per: '27,6'
            },
            {
                herbicida:  'Triclopir',
                trumao_kd:  '0,8',
                truma_per:  '70,4',
                rojo_arcilloso_kd:  '0,4',
                rojo_arcilloso_per: '67,7',
                granitico_kd:   '3,9',
                granitico_per:  '61,6',
                arenoso_kd: '0,2',
                arenoso_per:    '75,7',
                metamorfico_kd: '3,9',
                metamorfico_per: '56,8' 
            },
            {
                herbicida:  'Glifosato*',
                trumao_kd:  '--',
                truma_per:  '--',
                rojo_arcilloso_kd:  '--',
                rojo_arcilloso_per: '--',
                granitico_kd:  '--',
                granitico_per:  '--',
                arenoso_kd: '--',
                arenoso_per:    '--',
                metamorfico_kd: '--',
                metamorfico_per: '--' 
            },
            {
                herbicida:  'Indaziflan',
                trumao_kd:  '421,7',
                truma_per:  '11,9',
                rojo_arcilloso_kd:  '388,4',
                rojo_arcilloso_per: '11,4',
                granitico_kd:  '240,5',
                granitico_per:  '7,8',
                arenoso_kd: '10,5',
                arenoso_per:    '22,2',
                metamorfico_kd: '500,4',
                metamorfico_per: '7,8' 

            },
            {
                herbicida:  'Flazasulfuron',        
                trumao_kd:  '8,3',
                truma_per:  '27,2',
                rojo_arcilloso_kd:  '1,5',
                rojo_arcilloso_per: '76,7',
                granitico_kd:  '13,0',
                granitico_per:  '40,3',
                arenoso_kd: '3,7',
                arenoso_per:    '36,0',
                metamorfico_kd: '9,1',
                metamorfico_per: '50,2'
            },
            {
                herbicida:  'Fluroxipir',
                trumao_kd:  '1,0',
                truma_per:  '82,9',
                rojo_arcilloso_kd:  '1,0',
                rojo_arcilloso_per: '87,1',
                granitico_kd:  '8,7',
                granitico_per:  '38,3',
                arenoso_kd: '1,8',
                arenoso_per:    '74,5',
                metamorfico_kd: '8,3',
                metamorfico_per: '55,0'
            }
        ];
        
        //Cuadro 2
        /*Tasa de disipación (<i>K</i>) de los herbicidas en cada uno de los principales cinco suelos forstales de CMPC*/
        $scope.jsonTableHerbicidaK = [
            {
                herbicida:  'Simazina',
                trumao_k:  '0,028',
                trumao_td_50:  '26',
                trumao_td_90:  '82',
                
                rojo_arcilloso_k:  '0,015',
                rojo_arcilloso_td_50: '49',
                rojo_arcilloso_td_90: '155',
                
                granitico_k:   '0,020',
                granitico_per:  '36',
                granitico_per:  '115',
                
                arenoso_kd: '0,035',
                arenoso_per:    '25',
                arenoso_per:    '80',
                
                metamorfico_kd: '0,020',
                metamorfico_per: '37',
                metamorfico_per: '118'
            },
            {
                herbicida:  'Terbutilazina',
                trumao_k:  '0,021',
                trumao_td_50:  '33',
                trumao_td_90:  '105',
                
                rojo_arcilloso_k:  '0,013',
                rojo_arcilloso_td_50: '56',
                rojo_arcilloso_td_90: '177',
                
                granitico_k:   '0,020',
                granitico_per:  '38',
                granitico_per:  '121',
                
                arenoso_kd: '0,045',
                arenoso_per:    '16',
                arenoso_per:    '50',
                
                metamorfico_kd: '0,018',
                metamorfico_per: '39',
                metamorfico_per: '123'

            },
            {
                herbicida:  'Hexazinona',
                trumao_k:  '0,014',
                trumao_td_50:  '53',
                trumao_td_90:  '169',
                
                rojo_arcilloso_k:  '0,016',
                rojo_arcilloso_td_50: '47',
                rojo_arcilloso_td_90: '148',
                
                granitico_k:   '0,022',
                granitico_per:  '35',
                granitico_per:  '111',
                
                arenoso_kd: '0,020',
                arenoso_per:    '37',
                arenoso_per:    '116',
                
                metamorfico_kd: '0,012',
                metamorfico_per: '62',
                metamorfico_per: '195' 
            },
            {
                herbicida:  'Metsulfuron-metil',
                trumao_k:  '0,019',
                trumao_td_50:  '39',
                trumao_td_90:  '123',
                
                rojo_arcilloso_k:  '0,025',
                rojo_arcilloso_td_50: '29',
                rojo_arcilloso_td_90: '93',
                
                granitico_k:   '0,021',
                granitico_per:  '34',
                granitico_per:  '107',
                
                arenoso_kd: '0,031',
                arenoso_per:    '21',
                arenoso_per:    '67',
                
                metamorfico_kd: '0,030',
                metamorfico_per: '25',
                metamorfico_per: '80'
            },
            {
                herbicida:  'Triclopir',
                trumao_k:  '0,028',
                trumao_td_50:  '26',
                trumao_td_90:  '83',
                
                rojo_arcilloso_k:  '0,028',
                rojo_arcilloso_td_50: '27',
                rojo_arcilloso_td_90: '87',
                
                granitico_k:   '0,027',
                granitico_per:  '27',
                granitico_per:  '86',
                
                arenoso_kd: '0,032',
                arenoso_per:    '22',
                arenoso_per:    '71',
                
                metamorfico_kd: '0,027',
                metamorfico_per: '27',
                metamorfico_per: '85'
            },
            {
                herbicida:  'Glifosato',
                trumao_k:  '--',
                trumao_td_50:  '--',
                trumao_td_90:  '--',
                
                rojo_arcilloso_k:  '--',
                rojo_arcilloso_td_50: '--',
                rojo_arcilloso_td_90: '--',
                
                granitico_k:   '--',
                granitico_per:  '--',
                granitico_per:  '--',
                
                arenoso_kd: '--',
                arenoso_per:    '--',
                arenoso_per:    '--',
                
                metamorfico_kd: '--',
                metamorfico_per: '--',
                metamorfico_per: '--'
            },
            {
                herbicida:  'Indaziflam',
                trumao_k:  '0,009',
                trumao_td_50:  '78',
                trumao_td_90:  '247',
                
                rojo_arcilloso_k:  '0,015',
                rojo_arcilloso_td_50: '47',
                rojo_arcilloso_td_90: '148',
                
                granitico_k:   '0,019',
                granitico_per:  '39',
                granitico_per:  '123',
                
                arenoso_kd: '0,017',
                arenoso_per:    '43',
                arenoso_per:    '137',
                
                metamorfico_kd: '0,020',
                metamorfico_per: '37',
                metamorfico_per: '118'
            },
            {
                herbicida:  'Flazasulfuron',
                trumao_k:  '0,014',
                trumao_td_50:  '59',
                trumao_td_90:  '186',
                
                rojo_arcilloso_k:  '0,017',
                rojo_arcilloso_td_50: '42',
                rojo_arcilloso_td_90: '134',
                
                granitico_k:   '0,026',
                granitico_per:  '28',
                granitico_per:  '89',
                
                arenoso_kd: '0,034',
                arenoso_per:    '22',
                arenoso_per:    '70',
                
                metamorfico_kd: '0,014',
                metamorfico_per: '51',
                metamorfico_per: '162'
            },
            {
                herbicida:  'Fluroxipir',
                trumao_k:  '0,020',
                trumao_td_50:  '37',
                trumao_td_90:  '117',
                
                rojo_arcilloso_k:  '0,020',
                rojo_arcilloso_td_50: '35',
                rojo_arcilloso_td_90: '111',
                
                granitico_k:   '0,011',
                granitico_per:  '68',
                granitico_per:  '216',
                
                arenoso_kd: '0,015',
                arenoso_per:    '47',
                arenoso_per:    '47',
                
                metamorfico_kd: '0,017',
                metamorfico_per: '43',
                metamorfico_per: '135'
            },
        ];
        
        //Cuadro 3 herbicidas lixiviación
        /*Índices de lixiviación de los herbicidas en cada uno de los principales suelos forestales de CMPC (Seleccionados de la publicación Kogan et al. 2007).*/
        $scope.jsonTableHerbicidaLixiviacion = [
            {
                herbicida:  'Simazina',
                trumao_briggs:  '0,09',
                trumao_hamaker:  '0,11',
                trumao_gus: '3,73',

                rojo_arcilloso_briggs:  '0,09',
                rojo_arcilloso_hamaker: '0,18',
                rojo_arcilloso_gus: '4,63',
                
                granitico_briggs:   '0,09',
                granitico_hamaker:  '0,09',
                granitico_gus:  '3,45',
                
                arenoso_briggs: '0,9',
                arenoso_hamaker:    '0,49',
                arenoso_gus:    '3,84',
                
                metamorfico_briggs: '0,09',
                metamorfico_hamaker: '0,07',
                metamorfico_gus: '3,89'   
            },
            {
                herbicida:  'Terbutilazina',
                trumao_briggs:  '0,03',
                trumao_hamaker:  '0,02',
                trumao_gus: '2,66',

                rojo_arcilloso_briggs:  '0,03',
                rojo_arcilloso_hamaker: '0,03',
                rojo_arcilloso_gus: '3,20',
                
                granitico_briggs:   '0,03',
                granitico_hamaker:  '0,01',
                granitico_gus:  '1,93',
                
                arenoso_briggs: '0,03',
                arenoso_hamaker:    '0,06',
                arenoso_gus:    '1,94',
                
                metamorfico_briggs: '0,03',
                metamorfico_hamaker: '0,01',
                metamorfico_gus: '2,46' 
            },
            {
                herbicida:  'Hexazinona',
                trumao_briggs:  '0,29',
                trumao_hamaker:  '0,16',
                trumao_gus: '4,86',

                rojo_arcilloso_briggs:  '0,29',
                rojo_arcilloso_hamaker: '0,25',
                rojo_arcilloso_gus: '4,86',
                
                granitico_briggs:   '0,29',
                granitico_hamaker:  '0,13',
                granitico_gus:  '3,65',
                
                arenoso_briggs: '0,29',
                arenoso_hamaker:    '0,41',
                arenoso_gus:    '4,12',
                
                metamorfico_briggs: '0,29',
                metamorfico_hamaker: '0,10',
                metamorfico_gus: '4,78' 
            },
            {
                herbicida:  'Metsulfuron-metil',
                trumao_briggs:  '0,94',
                trumao_hamaker:  '0,14',
                trumao_gus: '4,35',
                
                rojo_arcilloso_briggs:  '0,94',
                rojo_arcilloso_hamaker: '0,10',
                rojo_arcilloso_gus: '3,56',
                
                granitico_briggs:   '0,94',
                granitico_hamaker:  '0,01',
                granitico_gus:  '2,29',
                
                arenoso_briggs: '0,94',
                arenoso_hamaker:    '0,11',
                arenoso_gus:    '2,52',
                
                metamorfico_briggs: '0,94',
                metamorfico_hamaker: '0,02',
                metamorfico_gus: '2,60'
            },
            {
                herbicida:  'Triclopir',
                trumao_briggs:  '0,01',
                trumao_hamaker:  '0,22',
                trumao_gus: '4,25',

                rojo_arcilloso_briggs:  '0,01',
                rojo_arcilloso_hamaker: '0,39',
                rojo_arcilloso_gus: '4,56',
                
                granitico_briggs:   '0,01',
                granitico_hamaker:  '0,06',
                granitico_gus:  '2,87',
                
                arenoso_briggs: '0,01',
                arenoso_hamaker:    '0,58',
                arenoso_gus:    '3,93',
                
                metamorfico_briggs: '0,01',
                metamorfico_hamaker: '0,06',
                metamorfico_gus: '3,46'
            },
            {
                herbicida:  'Glifosato',
                trumao_briggs:  '0,98',
                trumao_hamaker:  '--',
                trumao_gus: '--',

                rojo_arcilloso_briggs:  '0,98',
                rojo_arcilloso_hamaker: '--',
                rojo_arcilloso_gus: '--',
                
                granitico_briggs:   '0,98',
                granitico_hamaker:  '--',
                granitico_gus:  '--',
                
                arenoso_briggs: '0,98',
                arenoso_hamaker: '--',
                arenoso_gus:    '--',
                
                metamorfico_briggs: '0,98',
                metamorfico_hamaker: '--',
                metamorfico_gus: '--' 
            },
            {
                herbicida:  'Indaziflan',
                trumao_briggs:  '0,05',
                trumao_hamaker:  '0,00',
                trumao_gus: '0,60',

                rojo_arcilloso_briggs:  '0,05',
                rojo_arcilloso_hamaker: '0,00',
                rojo_arcilloso_gus: '0,35',
                
                granitico_briggs:   '0,05',
                granitico_hamaker:  '0,00',
                granitico_gus:  '0,36',
                
                arenoso_briggs: '0,05',
                arenoso_hamaker:    '0,02',
                arenoso_gus:    '1,90',
                
                metamorfico_briggs: '0,05',
                metamorfico_hamaker: '0,00',
                metamorfico_gus: '0,53'
            },
            {
                herbicida:  'Flazasulfuron',
                trumao_briggs:  '0,64',
                trumao_hamaker:  '0,03',
                trumao_gus: '3,51',

                rojo_arcilloso_briggs:  '0,64',
                rojo_arcilloso_hamaker: '0,15',
                rojo_arcilloso_gus: '4,28',
                
                granitico_briggs:   '0,64',
                granitico_hamaker:  '0,02',
                granitico_gus:  '2,14',
                
                arenoso_briggs: '0,64',
                arenoso_hamaker:    '0,06',
                arenoso_gus:    '2,14',
                
                metamorfico_briggs: '0,64',
                metamorfico_hamaker: '0,03',
                metamorfico_gus: '3,54'                 
            },
            {
                herbicida:  'Fluroxipir',
                trumao_briggs:  '0,61',
                trumao_hamaker:  '0,20',
                trumao_gus: '4,61',

                rojo_arcilloso_briggs:  '0,61',
                rojo_arcilloso_hamaker: '0,20',
                rojo_arcilloso_gus: '4,30',
                
                granitico_briggs:   '0,61',
                granitico_hamaker:  '0,03',
                granitico_gus:  '3,03',
                
                arenoso_briggs: '0,61',
                arenoso_hamaker:    '0,12',
                arenoso_gus:    '3,20',
                
                metamorfico_briggs: '0,61',
                metamorfico_hamaker: '0,03',
                metamorfico_gus: '3,42'
            }
        ];

        //Cuadro 4 herbicidas lisímetros
        /*Porcentaje de los residuos de los herbicidas, lixiviados bajo los 15 y 90 cm de profundidad de suelo en los estudios realizados en columnas con suelo disturbado. */
        $scope.jsonTableHerbicidaLisimetros = [
            {
                herbicida:  'Simazina',
                trumao_lix_15:  '2',
                trumao_lix_90:  '0',

                rojo_arcilloso_lix_15:  '25',
                rojo_arcilloso_lix_90: '0',
                
                granitico_lix_15:   '34',
                granitico_lix_90:  '10',
                
                arenoso_lix_15: '35',
                arenoso_lix_90:    '28',
                
                metamorfico_lix_15: '38',
                metamorfico_lix_90: '4'

            },
            {
                herbicida:  'Terbutilazina',
                trumao_lix_15:  '0',
                trumao_lix_90:  '0',

                rojo_arcilloso_lix_15:  '6',
                rojo_arcilloso_lix_90: '0',
                
                granitico_lix_15:   '3',
                granitico_lix_90:  '0',
                
                arenoso_lix_15: '20',
                arenoso_lix_90:    '0',
                
                metamorfico_lix_15: '16',
                metamorfico_lix_90: '0'
            },
            {
                herbicida:  'Hexazinona',
                trumao_lix_15:  '3',
                trumao_lix_90:  '0',

                rojo_arcilloso_lix_15:  '37',
                rojo_arcilloso_lix_90: '1',
                
                granitico_lix_15:   '14',
                granitico_lix_90:  '2',
                
                arenoso_lix_15: '70',
                arenoso_lix_90:    '12',
                
                metamorfico_lix_15: '47',
                metamorfico_lix_90: '4'
            },
            {
                herbicida:  'Metsulfuron-metil',
                trumao_lix_15:  '61',
                trumao_lix_90:  '--',

                rojo_arcilloso_lix_15:  '56',
                rojo_arcilloso_lix_90: '--',
                
                granitico_lix_15:   '53',
                granitico_lix_90:  '--',
                
                arenoso_lix_15: '62',
                arenoso_lix_90:    '--',
                
                metamorfico_lix_15: '53',
                metamorfico_lix_90: '--'

            },
            {
                herbicida:  'Triclopir',
                trumao_lix_15:  '66',
                trumao_lix_90:  '8',

                rojo_arcilloso_lix_15:  '60',
                rojo_arcilloso_lix_90: '22',
                
                granitico_lix_15:   '26',
                granitico_lix_90:  '0',
                
                arenoso_lix_15: '56',
                arenoso_lix_90:    '11',
                
                metamorfico_lix_15: '37',
                metamorfico_lix_90: '0'
            },
            {
                herbicida:  'Glifosato',
                trumao_lix_15:  '--',
                trumao_lix_90:  '--',

                rojo_arcilloso_lix_15:  '--',
                rojo_arcilloso_lix_90: '--',
                
                granitico_lix_15:   '--',
                granitico_lix_90:  '--',
                
                arenoso_lix_15: '--',
                arenoso_lix_90:    '--',
                
                metamorfico_lix_15: '--',
                metamorfico_lix_90: '--'
                
            },
            {
                herbicida:  'Indaziflan',
                trumao_lix_15:  '0',
                trumao_lix_90:  '0',

                rojo_arcilloso_lix_15:  '8',
                rojo_arcilloso_lix_90: '0',
                
                granitico_lix_15:   '0',
                granitico_lix_90:  '0',
                
                arenoso_lix_15: '59',
                arenoso_lix_90:    '0',
                
                metamorfico_lix_15: '42',
                metamorfico_lix_90: '0'
            },
            {
                herbicida:  'Flazasulfuron',
                trumao_lix_15:  '0',
                trumao_lix_90:  '0',

                rojo_arcilloso_lix_15:  '49',
                rojo_arcilloso_lix_90: '0',
                
                granitico_lix_15:   '41',
                granitico_lix_90:  '0',
                
                arenoso_lix_15: '70',
                arenoso_lix_90:    '4',
                
                metamorfico_lix_15: '59',
                metamorfico_lix_90: '0'

            },
            {
                herbicida:  'Fluroxipir',
                trumao_lix_15:  '32',
                trumao_lix_90:  '13',

                rojo_arcilloso_lix_15:  '54',
                rojo_arcilloso_lix_90: '17',
                
                granitico_lix_15:   '38',
                granitico_lix_90:  '10',
                
                arenoso_lix_15: '26',
                arenoso_lix_90:    '--',
                
                metamorfico_lix_15: '14',
                metamorfico_lix_90: '--'
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
                herbicida:  'Metsulfuron-metil'
            },
            {
                herbicida:  'Triclopir'
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