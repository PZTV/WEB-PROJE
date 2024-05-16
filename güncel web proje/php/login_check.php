<?php

session_start();
ob_start();


if(($_POST["user"]=="g231210058@sakarya.edu.tr") && ($_POST["pass"]=="g231210058"))
{

$_SESSION["login"] = "true";
$_SESSION["user"] = "g231210058@sakarya.edu.tr";
$_SESSION["pass"] ="g231210058";



echo '<h1>Hoşgeldiniz "g231210058". Giriş başarılı bir şekilde gerçekleşti. Anasayfaya yönlendiriliyorsunuz. Lütfen bekleyin...</h1><br>';
header("Refresh:4; url=../index.html");

}
else
{
echo "<h1>Kullanıcı adı veya şifre yanlış. Login sayfasına yönlendiriliyorsunuz. Lütfen tekrar deneyiniz...</h1>";
header("Refresh: 4; url=../giris-yap.html");
}


ob_end_flush();
?>