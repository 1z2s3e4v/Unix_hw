<?php  




$_Min = $_POST["_min"];
$_Hour = $_POST["_hour"];
$_Day = $_POST["_day"];
$_Mon = $_POST["_mon"];



$_PC = $_POST["_pc"];
$_User = $_POST["_usr"];
$_passwd = $_POST["_pwd"];
$_message = $_POST["_mes"];
//$init = shell_exec("crontab -r");
$page = shell_exec("../sh/remind.sh '".$_Min."' '".$_Hour."' '".$_Day."' '".$_Mon."' '".$_passwd."' '".$_User."' '".$_PC."' '".$_message."' 2>&1");
 
$show = shell_exec("crontab -l");


//echo $sta.$show;


?>

