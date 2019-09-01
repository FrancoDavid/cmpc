angular.module('app-cmpc')
    .controller("LoginController", ["$scope", '$location', 'loginService', '$timeout', '$rootScope', function($scope, $location, loginService, $timeout, $rootScope) {
        $scope.username = '';
        $scope.pass = '';
        $scope.label_error_user = '';
        $scope.label_error_pass = '';
        $scope.loading = false;
        $scope.icon_success = false;

        $scope.login = function(){
            let login_valido = loginService.login($scope.username,  $scope.pass);

            switch(login_valido){
                case 0 :
                    $scope.label_error_user = 'E-mail incorrecto.';
                break;
                case 1 :
                    $scope.label_error_pass = 'Contraseña incorrecta.';
                break;
                case 2:
                     $scope.loadinLogin();
                break;
            }
        };

        $scope.cleanLabelError = function() {
            $scope.label_error_user = '';
            $scope.label_error_pass = '';
            $scope.icon_success = false;           
        };

        $scope.loadinLogin = function(){
            $scope.loading = true;
            $timeout(function(){
                $scope.loading = false;
                $scope.icon_success = true;
                $rootScope.status_login = true;
                $scope.closeModal();
            },2000);
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