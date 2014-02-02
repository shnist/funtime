<?php

	//require_once('../assets/recaptchalib.php');

	function redirect($url, $permanent = false) {
	    header('Location: ' . $url, true, $permanent ? 301 : 302);
	    exit();
	}

  //$privatekey = "6Lez7u0SAAAAALaekZ56NA7djrtSD7p7hV7shhFC";
  //$resp = recaptcha_check_answer ($privatekey, $_SERVER["REMOTE_ADDR"], $_POST["recaptcha_challenge_field"], $_POST["recaptcha_response_field"]);

  //if (!$resp->is_valid) {
    // What happens when the CAPTCHA was entered incorrectly
    //die ("The reCAPTCHA wasn't entered correctly. Go back and try it again." . "(reCAPTCHA said: " . $resp->error . ")");
  //} else {
    // Your code here to handle a successful verification
  //}

	if (isset($_POST['submit']) === true || $_POST['submit-keyboard-fallback'] === 'submit') {
		// all values of the form stored in variables
		$givenName = $_POST['user-given-name'];
		$familyName = $_POST['user-family-name'];
		$childGivenName = $_POST['child-given-name'];
		$email = $_POST['email-address'];
		$date = $_POST['date'];

		//$toEmail = 'funtimemagicshow@yahoo.co.uk';
		$toEmail = 'aaron.jack.faber@gmail.com';
		$emailSubject = 'Funtime party booking';
		$mailheader = "From: ".$email."\r\n";
		$mailheader .= "Reply-To: ".$email."\r\n";
		$mailheader .= "Content-type: text/html; charset=iso-8859-1\r\n";
		// creating the email message
		$body = $givenName." ".$familyName."\r\n";
		$body .= "would like to book a party for ".$childGivenName."\r\n";
		$body .= "on the ".$date." . Their email address is: ".$email."\r\n";

		if (mail($toEmail, $emailSubject, $body, $mailheader)) {
			// been successful, redirect to success page
			redirect('http://www.funtimemagic.co.uk/thanks', true);
		} else {
			echo "Goodbye";
			redirect('http://www.funtimemagic.co.uk/oops', true);
			// something went wrong
		}
	} else {
		redirect('http://www.funtimemagic.co.uk/oops', true);
	}
?>