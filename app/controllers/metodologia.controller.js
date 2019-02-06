
angular.module('app-cmpc')
    .controller("MetodologiaCtrl", ["$scope", '$location', function($scope, $location) {
        console.log('Metodo CTRL');
        //Tabla 1 Suelos
        $scope.jsonTableSuelos = [
            {
                suelo  : 'Trumao',
                ph  : '6,05',
                conductividad_electrica : '0.05',
                suma_bases  :   '4,56',
                capacidad_intercambio   : '77,8',
                materia_organica :  '13,0',
                arena   :   '69',
                arcilla :   '2',
                limo    : '29'
            },
            {
                suelo  : 'Rojo arcillado',
                ph  : '5,60',
                conductividad_electrica : '0.04',
                suma_bases  :   '6,48',
                capacidad_intercambio   : '20,7',
                materia_organica :  '9,3',
                arena   :   '33',
                arcilla :   '48',
                limo    : '19'
            },
            {
                suelo  : 'Granítico',
                ph  : '5,10',
                conductividad_electrica : '0.08',
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
                conductividad_electrica : '0.02',
                suma_bases  :   '4,56',
                capacidad_intercambio   : '9,8',
                materia_organica :  '2,3',
                arena   :   '93',
                arcilla :   '2',
                limo    : '5'
            },
            {
                suelo  : 'Metaformico coster',
                ph  : '4,96',
                conductividad_electrica : '0.08',
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