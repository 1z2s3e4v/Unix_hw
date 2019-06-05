<?php  

$time = $_POST["time"];
$PC = $_POST["PC"];
$User = $_POST["User"];
$passwd = $_POST["passwd"];
$message = $_POST["message"];


$page = shell_exec("sh/./remind.sh '".$time."' '".$PC."' '".$User."' '".$passwd."' '".$message."'");
echo "xcow";

?>

