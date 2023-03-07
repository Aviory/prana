<?php

$post = (!empty($_POST)) ? true : false;

if($post)
{
$phone = trim($_POST['phone']);
$name = htmlspecialchars($_POST['name']);
$error = '';
$to="info@prana.dp.ua";
$subject="Дети - мобильный";

 
    $message = '<html><body>';
    $message .= '<img  style="margin-left: 90px;margin-bottom: 20px; margin-top: 20px;" src="http://prana.dp.ua/if/build/prana-club-logo.png" alt="prana.dp.ua" />';
    $message .= '<div style="font-size: 16px; margin-bottom: 10px; color: #555"><strong>Дети 5-14лет:</strong></div>';
    $message .= '<table rules="all" style=" background-color:#FAFAFA; border: 1px dotted #EBEBEB;" cellpadding="10">';
    if(isset($name) && $name != NULL) $message .= "<tr ><td><strong>Имя потенциального клиента:</strong> </td><td>" . $name . "</td></tr>";
    if(isset($phone) && $phone != NULL) $message .= "<tr><td><strong>Телефон:</strong> </td><td>" . $phone . "</td></tr>";
    $message .= "</table>";
    $message .= '<div style="font-size: 16px; margin-top: 20px; margin-bottom: 10px; color: #555"><a href="'.$_SERVER["SERVER_NAME"].' style="font-size: 12px;">'.$_SERVER["SERVER_NAME"].'</a></div>';
    $message .= "</body></html>";

    $headers = "From: ".$name." <".$mail.">". "\r\n";
    $headers .= "Content-type:text/html;charset=utf-8\r\n";

    $mail = mail($to, $subject, $message,$headers);
if($mail)
{
echo 'OK';
}

}
else
{
echo '<div class="notification_error">'.$error.'</div>';
}


?>