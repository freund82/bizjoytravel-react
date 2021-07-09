<?php
//получаем данные в массив POST
$name=$_GET['name'];
$tel=$_GET['tel'];
$email=$_GET['email'];

//проверяем переменные на получение вредоносных символов
$name=htmlspecialchars($name);
$tel=htmlspecialchars($tel);
$email=htmlspecialchars($email);

//декодируем url если кто-то попытается ввесди имя сайта в форму
$name=urldecode($name);
$tel=urldecode($tel);
$email=urldecode($email);

//удаляем пробеллы если есть в начале и конца строки если есть
$name=trim($name);
$tel=trim($tel);
$email=trim($email);


// mail("maximutkin82@yandex.ru",  "Заявка с сайта",  "ФИО ".$name.".  tel: ".$tel.".  email: ".$email , "From: webhobby@maxhooktravelblog.ru \r\n");
mail("maximutkin82@yandex.ru",  "Заявка с сайта",  "ФИО ".$name.".  tel: ".$tel.".  email: ".$email , "From: webhobby@maxhooktravelblog.ru \r\n");

header('Location: http://maxhooktravelblog.ru/test/index.html');
?>


