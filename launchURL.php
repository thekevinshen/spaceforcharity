<?php

//Called from 'landing.html' upon entering URL

$url = $_GET['URLfieldName'];
if ($url != null && $url != "" && $url != " "){
	header( 'Location: http://'.$url);
} else {
	header( 'Location: landing.html');
}


?>