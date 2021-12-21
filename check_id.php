<?php

include("db_connection.php");

$encode=file_get_contents("php://input");
$decode=json_decode($encode,true);

$arr=array();

$user_id=$decode['user_id'];


if ($user_id)
{
    $query="SELECT * FROM `users` WHERE `user_id`='$user_id'";
    
$all_data=mysqli_query($connect,$query);

       if (mysqli_num_rows($all_data)>0)
    {
        
      $data=mysqli_fetch_object($all_data);
          
             $arr[]=$data;
             
          echo json_encode($data);
    }
    
}

else
{
    echo ("error");
}



?>
