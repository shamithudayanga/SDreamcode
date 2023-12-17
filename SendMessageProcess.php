<?php include "connection.php"?>
<?php

// echo ("Suecess");

$name = $_POST["name"];
$email = $_POST["email"];
$subject = $_POST["subject"];
$msg = $_POST["message"];


if(empty($name)){
    echo("Please Enter your Name");

}else if(empty ($email)){
    echo("Please Enter your Email");

}else if(!filter_var($email,FILTER_VALIDATE_EMAIL)){
    echo ("Invalid Email !!!");
}else if(strlen($email) >= 100){
    echo ("Email must have less than 100 characters");
}else if(empty($subject)){
    echo ("Please enter your subject !!!");

}elseif(empty($msg)){
    echo("Please enter your Message.");


}else{
    Database::iud("INSERT INTO `message` (`email`,`name`,`subject`,`message`)
    VALUES('".$email."','".$name."','".$subject."','".$msg."')");
    echo("Success");
    // echo("Your message has been successfully sent, we will contact you shortly.");
    
}
?>