<?php

include("db_connection.php");
$encode=file_get_contents('php://input');
$decode=json_decode($encode,true);

$category_id=$decode['category_id'];
$product_id=$decode['product_id'];
$product_name=$decode['name'];
$product_price=$decode['prc'];
$product_image=$decode['img'];
$product_user_id=$decode['user_id'];

if ($category_id&&$product_id&&$product_name&&$product_price&&$product_image&&$product_user_id)
{
$query="INSERT INTO `products`(`category_id`, `product_id`, `product_name`, `product_price`, `product_image`, `product_user_id`) VALUES ('$category_id','$product_id','$product_name','$product_price','$product_image','$product_user_id')";
$insertion=mysqli_query($connect,$query);


if ($insertion)
 {
     echo ('done');
 }
 
 else
 {
     echo ("error");
 }

}

else
{
    echo ("not data ");
}

 



?>

