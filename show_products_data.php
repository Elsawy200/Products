<?php

include("db_connection.php");
$arr=array();


$query="SELECT * FROM `products`";
$all_data=mysqli_query($connect,$query);

if (mysqli_num_rows($all_data)>0)
{
    while ($data=mysqli_fetch_object($all_data))
    {
        $arr[]=$data;
        
    }
     echo json_encode($arr);
}

?>

