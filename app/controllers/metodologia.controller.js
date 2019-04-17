
angular.module('app-cmpc')
    .controller("MetodologiaCtrl", ["$scope", '$location', function($scope, $location) {
        console.log('Metodo CTRL');
        
        //Tabla 1 Suelos
        $scope.jsonTableSuelos = [
            {
                suelo  : 'Trumao',
                ph  : '6,05',
                conductividad_electrica : '0,05',
                suma_bases  :   '4,56',
                capacidad_intercambio   : '77,8',
                materia_organica :  '13,0',
                arena   :   '69',
                arcilla :   '2',
                limo    : '29'
            },
            {
                suelo  : 'Rojo arcilloso',
                ph  : '5,60',
                conductividad_electrica : '0,04',
                suma_bases  :   '6,48',
                capacidad_intercambio   : '24,0',
                materia_organica :  '9,3',
                arena   :   '33',
                arcilla :   '48',
                limo    : '19'
            },
            {
                suelo  : 'Granítico',
                ph  : '5,10',
                conductividad_electrica : '0,08',
                suma_bases  :   '6,01',
                capacidad_intercambio   : '32,6',
                materia_organica :  '6,0',
                arena   :   '53',
                arcilla :   '19',
                limo    : '29'
            },
            {
                suelo  : 'Arenoso',
                ph  : '5,43',
                conductividad_electrica : '0,02',
                suma_bases  :   '4,30',
                capacidad_intercambio   : '9,8',
                materia_organica :  '2,3',
                arena   :   '93',
                arcilla :   '2',
                limo    : '5'
            },
            {
                suelo  : 'Metamórfico costero',
                ph  : '4,96',
                conductividad_electrica : '0,08',
                suma_bases  :   '6,50',
                capacidad_intercambio   : '42,7',
                materia_organica :  '16,1',
                arena   :   '51',
                arcilla :   '22',
                limo    : '27'
            }

        ];


        //Tabla 2 Herbicida
        $scope.jsonTableHerbicida = [
            {
                herbicida:  'Simazina',
                dosis:  '',
                peso_molecular: '201,66',
                solubilidad_agua:'5,0',
                coef_low_kow:'2,3',
                pka:'1,62',
                densidad:'1,3',
                presion_valor:'8,1x10-7',
                coef_henry:'5,6x10-5',
                dt_50_agua:'46',
                dt_50_suelo:'60',
                koc:'130',
                riesgo_cancer:'no probable',
                disruptor_endocrino:'no'
            },
            {
                herbicida:  'Terbutilazina',
                dosis:  '',
                peso_molecular: '299,71',
                solubilidad_agua:'6,6',
                coef_low_kow:'3,4',
                pka:'1,9',
                densidad:'1,19',
                presion_valor:'1,5x10-4',
                coef_henry:'2,3x10-3',
                dt_50_agua:'6',
                dt_50_suelo:'72',
                koc:'354',
                riesgo_cancer:'no probable',
                disruptor_endocrino:'no'
            },
            {
                herbicida:  'Hexazinona',
                dosis:  '',
                peso_molecular: '252,31',
                solubilidad_agua:'33.000',
                coef_low_kow:'1,17',
                pka:'2,2',
                densidad:'1,25',
                presion_valor:'3,0x10-5',
                coef_henry:'1,1x10-7',
                dt_50_agua:'56',
                dt_50_suelo:'90',
                koc:'605',
                riesgo_cancer:'no probable',
                disruptor_endocrino:'no'
            },
            {
                herbicida:  'Metsulfuron-metil',
                dosis:  '',
                peso_molecular: '381,36',
                solubilidad_agua:'2.790',
                coef_low_kow:'-1,87',
                pka:'3,75',
                densidad:'1,45',
                presion_valor:'1,4x10-11',
                coef_henry:'2,9x10-6',
                dt_50_agua:'115',
                dt_50_suelo:'28',
                koc:'60',
                riesgo_cancer:'no probable',
                disruptor_endocrino:'no'
            },
            {
                herbicida:  'Triclopir',
                dosis:  '',
                peso_molecular: '256,5',
                solubilidad_agua:'8.100',
                coef_low_kow:'4,62',
                pka:'3,97',
                densidad:'1,3',
                presion_valor:'1,0x10-4',
                coef_henry:'2,9x10-3',
                dt_50_agua:'25',
                dt_50_suelo:'30',
                koc:'27',
                riesgo_cancer:'no probable',
                disruptor_endocrino:'no'
            },
            {
                herbicida:  'Glifosato',
                dosis:  '',
                peso_molecular: '169,1',
                solubilidad_agua:'10.500',
                coef_low_kow:'-3,2',
                pka:'2,34',
                densidad:'1,71',
                presion_valor:'1,3x10-6',
                coef_henry:'2,1x10-7',
                dt_50_agua:'10',
                dt_50_suelo:'24',
                koc:'1.424',
                riesgo_cancer:'no probable',
                disruptor_endocrino:'no'
            },
            {
                herbicida:  'Indaziflan',
                dosis:  '',
                peso_molecular: '301,36',
                solubilidad_agua:'2,8',
                coef_low_kow:'2,8',
                pka:'3,5',
                densidad:'1,23',
                presion_valor:'2,551x10-8',
                coef_henry:'2,7x10-6',
                dt_50_agua:'3',
                dt_50_suelo:'150',
                koc:'1.000',
                riesgo_cancer:'no probable',
                disruptor_endocrino:'no'
            },
            {
                herbicida:  'Flazasulfuron',
                dosis:  '',
                peso_molecular: '407,37',
                solubilidad_agua:'2.100',
                coef_low_kow:'-0,06',
                pka:'4,37',
                densidad:'1,62',
                presion_valor:'1,3x10-5',
                coef_henry:'2,6x10-6',
                dt_50_agua:'15',
                dt_50_suelo:'18',
                koc:'46',
                riesgo_cancer:'no probable',
                disruptor_endocrino:'no'
                
            },
            {
                herbicida:  'Fluroxipir',
                dosis:  '',
                peso_molecular: '255,03',
                solubilidad_agua:'6.500',
                coef_low_kow:'0,04',
                pka:'2,94',
                densidad:'1,09',
                presion_valor:'3,8x10-10',
                coef_henry:'1,7x10-10',
                dt_50_agua:'11',
                dt_50_sßsuelo:'51',
                koc:'68',
                riesgo_cancer:'no probable',
                disruptor_endocrino:'no'
            }
        ];


    }   
]);