angular.module('app-cmpc')
    .service("testService", ["$http", '$rootScope', function($http,$rootScope) {
        return {
            obtenerData: function(){
              return $http({
                method: "GET",
                url: "/test_cmpc/cmpc/API/conexion.php"
              }).then(function(result){
                // Si el resultado es erróneo
                if(result.data.Resultado == '-1'){
                  console.log('fail');
                }
                return result;
              });
            }
        }
    }   
]);