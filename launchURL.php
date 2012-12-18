<?php

$url = $_GET['URLfieldName'];
if ($url != null && $url != "" && $url != " "){
	header( 'Location: http://'.$url);
} else {
	header( 'Location: landing.html');
}


?>