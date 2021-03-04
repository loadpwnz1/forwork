<?php
setcookie(user, '', time()-3601,"/");
print '<script>document.location.href="../index.php"</script>';  
 ?>