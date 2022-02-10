<?php
 $fName = 'Имя: '.$_POST['name'].' <br />';
 $fPhone = 'Телефон: '.$_POST['phone'].' <br />';
 $AllInOne = $fName.$fPhone;
 $to = 'feniks080808@mail.ru';
 $headers = "Content-type: text/html; charset=utf-8 \r\n";
  $headers = "From: Site <blandchardsskillbox.tmweb.ru>\r\n";
  if( mail($to, 'Свяжитесь с нами', $AllInOne, $headers)) {
    echo "Спасибо за заявку!";
  } else {
    echo "Ошибка отправки!";  
  }
?>