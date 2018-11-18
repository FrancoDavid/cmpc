<?php

class DB_mysql {
    // Datos de la base de datos
	var $usuario;
	var $password;
	var $servidor;
    var $basededatos;
    
    /* Método Constructor: Cada vez que creemos una variable de esta clase, se ejecutará esta función */
    function DB_mysql($bd = "", $host = "localhost", $user = "nobody", $pass = "") {
        $this->basededatos = $bd;
        $this->servidor = $host;
        $this->usuario = $user;
        $this->password = $pass;
    }

    /*Conexión a la base de datos*/

    function conectar($bd, $host, $user, $pass){
        // creación de la conexión a la base de datos con mysql_connect()
        $conexion = mysqli_connect( $servidor, $usuario, "" ) or die ("No se ha podido conectar al servidor de Base de datos");
        $db = mysqli_select_db( $conexion, $bd ) or die ( "Upps! Pues va a ser que no se ha podido conectar a la base de datos" );

        return $conexion;
    }

    function selectBD($conexion, $bd){
        // Selección del a base de datos a utilizar
        $db = mysqli_select_db( $conexion, $bd ) or die ( "Upps! Pues va a ser que no se ha podido conectar a la base de datos" );
        return $db;
    }


}

?>
 