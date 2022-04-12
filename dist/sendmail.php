<?php
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;

    require 'phpmailer/src/Exception.php';
    require 'phpmailer/src/PHPMailer.php';

    $mail = new PHPMailer(true);
    $mail->CharSet = 'UTF-8';
    $mail->setLanguage('uk', 'phpmailer/language/');
    $mail->IsHTML(true);

    $mail->setFrom('admin@pletenyikit.com.ua', 'Плетений КіТ');
    $mail->addAddress('m.pitanova@gmail.com');
    $mail->Subject = 'Привіт! В мене є питання!';

    $body = '<h1>Лист від Pletenyi Kit!';

    if(trim(!empty($_POST['name']))){
        $body.='<p><strong>Name:</strong> '.$POST['name'].'</p>';
    }
    if(trim(!empty($_POST['surname']))){
        $body.='<p><strong>Surname:</strong> '.$_POST['surname'].'</p>';
    }
    if(trim(!empty($_POST['email']))){
        $body.='<p><strong>E-mail:</strong> '.$_POST['email'].'</p>';
    }
    if(trim(!empty($_POST['message']))){
        $body.='<p><strong>Message:</strong> '.$_POST['message'].'</p>';
    }

    $mail->Body = $body;

    if(!$mail->send()){
        $message = 'Error';
    } else {
        $message = 'Message sent!';
    }

    $response = ['message' => $message];

    header('Content-type: application/json');
    echo json_encode($response);
?>