angular.module('app-cmpc')
    .controller("LoginController", ["$scope", '$location', 'loginService', '$timeout', '$rootScope', function($scope, $location, loginService, $timeout, $rootScope) { 
        $scope.username = '';
        $scope.pass = '';
        $scope.label_error_user = '';
        $scope.label_error_pass = '';
        $scope.loading = false;
        $scope.icon_success = false;

        $scope.login = function (){
            $scope.loading = true;
            
            var email_user = $scope.username;
            var password = $scope.pass;

            loginService.loginFirebase(email_user, password)
                    .then(function(result){
                        $scope.loading = false;
                        $scope.icon_success = true;
                        $rootScope.status_login = true;
                        $scope.closeModal();
                    })
                    .catch(function(error) {
                        $scope.loading = false;

                        // Handle Errors here.
                        var errorCode = error.code;
                        var errorMessage = error.message;

                        if (errorCode === 'auth/wrong-password') {
                          $scope.label_error_pass = 'Contraseña incorrecta.';
                        } else {
                            $scope.label_error_user = 'E-mail incorrecto.';
                        }
                        console.log(error);
                    });
        };

        $scope.cleanLabelError = function() {
            $scope.label_error_user = '';
            $scope.label_error_pass = '';
            $scope.icon_success = false;           
        };

        $scope.closeModal = function(){
            $timeout(function(){
                $("#modal-login").modal("hide");
                $scope.cleanLabelError(); 
            },1000);
        };


        console.log($rootScope.status_login);

    }   
]);