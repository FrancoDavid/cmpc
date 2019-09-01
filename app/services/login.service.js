angular.module('app-cmpc')
    .service("loginService", ["$http", '$rootScope', function($http,$rootScope) {
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
            },
            login: function(user, pass){
                const CLAVE_TEST = '123',
                    USER_TEST = 'pia@test.cl',
                    USER_VALID = (USER_TEST == user),
                    PASS_VALID = (CLAVE_TEST == pass);

                if (USER_VALID){
                    if(PASS_VALID)
                        return 2;
                    else 
                        return 1;
                } else {
                    return 0;
                }
            }
        }
    }   
]);