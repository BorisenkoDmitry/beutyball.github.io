<?php
 


    $to = "dim-borisenk@yandex.ru"; // емайл получателя данных из формы
    $tema = "Форма обратной связи на PHP"; // тема полученного емайла
    $message = "Ваше имя: ".$_POST['name']."<br>";//присвоить переменной значение, полученное из формы name=name
    $message .= "E-mail: ".$_POST['mail']."<br>"; //полученное из формы name=email
    $message .= "Номер телефона: ".$_POST['phone']."<br>"; //полученное из формы name=phone
    $message .= "Сообщение: ".$_POST['product']."<br>"; //полученное из формы name=message
    $headers  = 'MIME-Version: 1.0' . "\r\n"; // заголовок соответствует формату плюс символ перевода строки
    $headers .= 'Content-type: text/html; charset=utf-8' . "\r\n"; // указывает на тип посылаемого контента
     //отправляет получателю на емайл значения переменных
     if (mail($to, $tema, $message, $headers)) {
         echo true;
     } else {
         echo false;
     }
?>