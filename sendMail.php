<?php
    $name = "a";
    $phone = "a";
    $fromForm = "a";

    if(isset($_POST['name'])){
        $name = $_POST['name'];
    }
    if(isset($_POST['phone'])){
        $phone = $_POST['phone'];
    }
    if(isset($_POST['from'])){
        $fromForm = $_POST['from'];
    }
    

//    $message = "имя:".$name."\r\nтел:".$phone."\r\n".$fromForm;

    $message = '<html><body>';
    $message .= '<img  style="margin-left: 90px;margin-bottom: 20px; margin-top: 20px;" src="http://prana.dp.ua/if/build/prana-club-logo.png" alt="prana.dp.ua" />';
    $message .= '<div style="font-size: 16px; margin-bottom: 10px; color: #555"><strong>Новый желающий научится читать быстрее скорости света!</strong></div>';
    $message .= '<table rules="all" style=" background-color:#FAFAFA; border: 1px dotted #EBEBEB;" cellpadding="10">';
    if(isset($name) && $name != NULL) $message .= "<tr ><td><strong>Имя потенциального клиента:</strong> </td><td>" . $name . "</td></tr>";
    if(isset($phone) && $phone != NULL) $message .= "<tr><td><strong>Телефон:</strong> </td><td>" . $phone . "</td></tr>";
    $message .= "</table>";
    $message .= '<div style="font-size: 16px; margin-top: 20px; margin-bottom: 10px; color: #555"><a href="'.$_SERVER["SERVER_NAME"].' style="font-size: 12px;">'.$_SERVER["SERVER_NAME"].'</a></div>';
    $message .= "</body></html>";

    $mail = 'prana.ukraine.online@gmail.com';
    $subject = "Заявка c prana.dp.ua";
    $headers = "From: ".$name." <".$mail.">". "\r\n";
    $headers .= "Content-type:text/html;charset=utf-8\r\n";

    mail($mail, $subject, $message, $headers);


    echo "fire ".$name." ".$phone." ".$mail;
?>