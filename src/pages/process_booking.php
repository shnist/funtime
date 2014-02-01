<?php

	function redirect($url, $permanent = false) {
	    header('Location: ' . $url, true, $permanent ? 301 : 302);
	    exit();
	}

	if (isset($_POST['submit']) === true || $_POST['submit-keyboard-fallback'] === 'submit') {
		// all values of the form stored in variables
		$givenName = $_POST['user-given-name'];
		$familyName = $_POST['user-family-name'];
		$childGivenName = $_POST['child-given-name'];
		$email = $_POST['email-address'];
		$date = $_POST['date'];

		$toEmail = 'aaron.jack.faber@gmail.com';
		$emailSubject = 'Funtime party booking';
		$mailheader = "From: ".$email."\r\n";
		$mailheader .= "Reply-To: ".$email."\r\n";
		$mailheader .= "Content-type: text/html; charset=iso-8859-1\r\n";
		// creating the email message
		$body = "Parent's Name: ".$givenName." ".$familyName."\r\n";
		$body .= "would like to book a part for ".$childGivenName."\r\n";
		$body .= "on the ".$date." . Their email address is: ".$email."\r\n";

		if (mail($toEmail, $emailSubject, $body, $mailheader)) {
			// been successful, redirect to success page
			redirect('http://funtime.local/pages/thanks', true);
		} else {
			echo "Goodbye";
			redirect('http://funtime.local/pages/oops', true);
			// something went wrong
		}
	} else {
		redirect('http://funtime.local/pages/oops', true);
	}
?>