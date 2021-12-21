<?php

include("db_connection.php");
$arr=array();



$query = "SELECT * FROM `users` WHERE 1";


$get_data = mysqli_query($connect, $query);

if (mysqli_num_rows($get_data) > 0) {

    while ($data = mysqli_fetch_object($get_data)) {
        $arr[]= $data;

    }


}

if ($arr) {
    echo json_encode($arr);
}

else {
    echo("errorr no data");
}



?>

