<?php
include 'rus.php';
$login = filter_var(trim($_POST['login']),FILTER_SANITIZE_STRING);
$pass = filter_var(trim(md5($_POST['pass'])),FILTER_SANITIZE_STRING);
$mysql = new mysqli('localhost','root','','gooddb');
$result=$mysql->query("SELECT * FROM `users` WHERE `login`='$login' AND `pass`='$pass'") ;
$user=$result->fetch_assoc();
if (count ($user)==0) {
  echo $userNotFound;
  exit;
}else{
	setcookie("user", $user['name'], time()+3600,"/"); 
}
  
$mysql->close();
print '<script>document.location.href="../index.php"</script>';
?>