<?php

include("db_connection.php");
$encode=file_get_contents('php://input');
$decode=json_decode($encode,true);
$arr=array();

$user_id=$decode['user_id'];

if ($user_id)
{
    $query="SELECT * FROM `products` WHERE `product_user_id`='$user_id'";

    $products_data=mysqli_query($connect,$query);

        while($data=mysqli_fetch_object($products_data))
        { 
                $arr[]=$data;
        
            
        }
        
       
   echo json_encode($arr);
}
else
{
    echo ("no data");

}


?>
