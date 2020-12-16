<?php

	use PHPMailer\PHPMailer\PHPMailer;
	use PHPMailer\PHPMailer\Exception;

	require 'phpmailer/src/Exception.php';
	require 'phpmailer/src/PHPMailer.php';
	require 'phpmailer/src/SMTP.php';

	$mail = new PHPMailer(true);
	$mail->CharSet = 'UTF-8';
	$mail->setLanguage('ru', 'phpmailer/language/');
	$mail->IsHTML(true);

	//От каго письмо
	$mail->setFrom('rudolifrudolif@gmail.com', 'Cтирка ковров');
	//Кому отправить
	$mail->addAddress('rudolifrudolif@gmail.com');
	//Тема письма
	$mail->Subject = ('Cтирка ковров');

	//Тело письма
	$body = '<h1>Cтирка ковров</h1>';

	$n = 15;
	for ($i = 0; $i <= $n; $i++) {
		$product = $_POST['product--add--' . $i];
		$wight = $_POST['product--wight--' . $i];
		$length = $_POST['product--length--' . $i];

		$wet = $_POST['product--wet--' . $i];
		$urgent = $_POST['product--urgent--' . $i];
		$smell = $_POST['product--smell--' . $i];

		if (isset($product) && !empty($product)) {
			$body.='<p><strong>Тип ковра: </strong>' .  $product . '</p>';

			if ($wight ) {
				$body.='<p><strong>Ширина изделия: </strong>' .  $wight . '</p>';
			} else {
				$body.='<p><strong>Ширина изделия: </strong>0</p>';
			}

			if ($length) {
				$body.='<p><strong>Длинна изделия: </strong>' .  $length . '</p>';
			} else {
				$body.='<p><strong>Длинна изделия: </strong>0</p>';
			}

			if ($wet ) {
				$body.='<p>' .  $wet . '</p>';
			}
			if ($urgent ) {
				$body.='<p>' .  $urgent . '</p>';
			}
			if ($smell ) {
				$body.='<p>' .  $smell . '</p>';
			}
			$body.='---------------------------------------------------------------';

		}
	}

	$finall__price_input = $_POST['finall--price-input'];
	$finall__delivery_input = $_POST['finall--delivery-input'];

	if ($finall__price_input ) {
		$body.='<p><strong>Стоимость стирки: </strong>' .  $finall__price_input . ' ₽ </p>';
	}
	if ($finall__delivery_input ) {
		$body.='<p><strong>Стоимость доставки: </strong>' .  $finall__delivery_input . ' ₽ </p>';
	}

	if(trim(!empty($_POST['name']))) {
		$body.='<p><strong>Имя: </strong>' . $_POST['name']. '</p>';
	}

	if(trim(!empty($_POST['phone']))) {
		$body.='<p><strong>Телефон: </strong>' . $_POST['phone']. '</p>';
	}

	$mail->Body = $body;

	//Отправляем
	if (!$mail->send()) {
		$message = 'Ошибка';
	} else {
		$massage = 'Данные отправлены!';
	}

	$response = ['message' => $massage];

	header('Content-type: application/json');
	echo json_encode($response);


?>