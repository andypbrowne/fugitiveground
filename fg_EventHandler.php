<?php

include_once('error_reporting.php');
require_once('connection.php');

$action = $_REQUEST['action'];

$action();

function fg_SaveEmail(){
    $email = $_REQUEST['email'];

    if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
       // print "Thank You";
       // db or spreadsheet insertion
       $query = "Select Email from FG_Subscriptions where Email = '$email'";
       $res= mysql_query($query)or die(mysql_error());
       if(mysql_num_rows($res) >= 1){
           print 'Email Already Submitted';
       } 
       else{
           $query = "Insert Into FG_Subscriptions (Email) Values ('$email')";
           $ressult= mysql_query($query)or die(mysql_error());
           print 'Thank You';
       }
    }
    else{
      print 'Email Invalid';
    }

}
?>
