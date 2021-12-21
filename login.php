<?php
// header('Content-type: application/json');
include ('db_connection.php');

$encode=file_get_contents('php://input');
$decode=json_decode($encode,true);

$arr=array();


$email=$decode['user_email'];
$password=$decode['user_password'];



if ($password&&$email)
{   
    
    $query="SELECT user_id FROM `users` WHERE `user_email`= '$email' AND`user_password`= '$password';";
    

    $log=mysqli_query($connect,$query);
       
     
    if (mysqli_num_rows($log)>0)
    {
        
      $data=mysqli_fetch_object($log);
          
             $arr[]=$data;
             
          echo json_encode($data->user_id);
    }
    
    else{
        
        echo("wrong email or password");
    }
     
}  


 else
    {
      
       echo("Please Write Email and Password");
    }





?>