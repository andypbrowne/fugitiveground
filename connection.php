<?php
/* Author:AY
 * Date: 05/15/2014
 */
    $mysql_hostname = "localhost";
    $mysql_user = "andypbro_fgadmin";
    $mysql_password = "butterflyanchor!!@12";
    $mysql_database = "andypbro_db_fugitiveground";
    $prefix = "";
    $bd = mysql_connect($mysql_hostname, $mysql_user, $mysql_password) or die("Could not connect database");
    mysql_select_db($mysql_database, $bd) or die("Could not select database");
    
?>
