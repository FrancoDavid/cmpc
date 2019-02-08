<?php

include("conexion.class.php");

class DataTable extends DB_mysql {
    public $mysql;
    function constructor(){
        $this->mysql = new DB_mysql();
        $this->mysql->conectar();
    }

    function consultar(){
        // establecer y realizar consulta. guardamos en variable.
        $consulta = "SELECT * FROM test_table";
        
    }
}

?>