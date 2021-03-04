<?php
include 'rus.php';
$login = filter_var(trim($_POST['login']),FILTER_SANITIZE_STRING);
$name = filter_var(trim($_POST['name']),FILTER_SANITIZE_STRING);
$pass = filter_var(trim($_POST['pass']),FILTER_SANITIZE_STRING);
if (mb_strlen($login)<5 || mb_strlen($login)>90)
  {
  echo $quantitySymLogin;
  exit;
  }
else if (mb_strlen($name)<3 || mb_strlen($name)>50)
  {
  echo $quantitySymName;
  exit;
  }
  else if (mb_strlen($pass)<2 || mb_strlen($pass)>6)
    {
    echo $quantitySymPass;
    exit;
    }
	
$mysql = new mysqli('localhost','root','','gooddb');
	
$result=$mysql->query("SELECT * FROM `users` WHERE `login`='$login'") ;
$user=$result->fetch_assoc();	

if (count($user)!=0){
	$mysql->query("INSERT INTO `users` ( `login`, `pass`, `name`) VALUES ('$login', MD5('$pass'), '$name')") ;
}else{
	print $loginIsHave;
}
$mysql->close();
print '<script>document.location.href="../index.php"</script>';
 ?>