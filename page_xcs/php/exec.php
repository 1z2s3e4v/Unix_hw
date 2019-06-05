<?php  




$_Min = $_POST["_min"];
$_Hour = $_POST["_hour"];
$_Day = $_POST["_day"];
$_Mon = $_POST["_mon"];



$_PC = $_POST["_pc"];
$_User = $_POST["_usr"];
$_passwd = $_POST["_pwd"];
$_message = $_POST["_mes"];


$page = shell_exec("sh/./remind.sh '".$_Min."' '".$_Hour."' '".$_Day."' '".$_Mon."' '".$_PC."' '".$_User."' '".$_passwd."' '".$_message."' 2>&1");
echo "xcow";

?>

