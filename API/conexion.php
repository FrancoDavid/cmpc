<?php

    header('Content-Type:   application/json');

    // Datos de la base de datos
	$usuario = "root";
	$password = "";
	$servidor = "localhost";
	$basededatos = "test-cmpc";
	
	// creación de la conexión a la base de datos con mysql_connect()
	$conexion = mysqli_connect( $servidor, $usuario, "" ) or die ("No se ha podido conectar al servidor de Base de datos");

    // Selección del a base de datos a utilizar
	$db = mysqli_select_db( $conexion, $basededatos ) or die ( "Upps! Pues va a ser que no se ha podido conectar a la base de datos" );

    // establecer y realizar consulta. guardamos en variable.
	$consulta = "SELECT * FROM test_table";
    $resultado = mysqli_query( $conexion, $consulta ) or die ( "Algo ha ido mal en la consulta a la base de datos");

    $array = array();

    while ($columna = mysqli_fetch_array( $resultado ))
	{
		//echo $columna['table_id'] . '-' . $columna['latitud'] . " / ";
        $array['datos'][] = $columna;
    }

    echo json_encode($array);

    // cerrar conexión de base de datos
	mysqli_close( $conexion );


?>