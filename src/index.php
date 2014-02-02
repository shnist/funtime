<?php

	function redirect($url, $permanent = false) {
	    header('Location: ' . $url, true, $permanent ? 301 : 302);
	    exit();
	}

	redirect('http://www.funtimemagic.co.uk/pages/index.shtml', true);

?>