<?php

 header('Content-type: application/json');
$array = array();

include('db_connection.php');


$json = file_get_contents('php://input');
$decoded=json_decode($json,true);

$print=array();


$user_first_name=$decoded['user_first_name'];
$user_last_name=$decoded['user_last_name'];
$user_email=$decoded['user_email'];
$user_password=$decoded['user_password'];
$user_repeat_password=$decoded['user_repeat'];


if($user_first_name&&$user_last_name&&$user_email&&$user_password&&$user_repeat_password)
{
    
    $checkk = "SELECT * FROM users WHERE user_email='$user_email'";

 
 $check = mysqli_fetch_array(mysqli_query($connect,$checkk));
 
 
if(isset($check)){
 
 echo('Email Already Exist, Please Try Again !!!') ;
 
 
 }
 else{
 
   $users=mysqli_query($connect,"INSERT INTO `users`(`user_first_name`,`user_last_name`,`user_email`,`user_password`,`user_repeat_password`) VALUES ('$user_first_name','$user_last_name','$user_email','$user_password','$user_repeat_password')");
  echo('User Registered Successfully');
 }
}

else
{
    echo('Please Complete Registration ');
}



 
 
 mysqli_close($connect);
 
 
 

 




  



    


?>