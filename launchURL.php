<?php

// Called from "landing.html" upon entering a URL

$url = $_GET['URLfieldName'];
if (urlParse($url)){
	// Do the URL Parsing Here.
	echo("2 url parse");
	//header( 'Location: http://'.$url);
} else {
	header( 'Location: landing.html');
}

function urlParse($url)
{
	$url = trim($url); // removes whitespaces from beginning and end

	$http = substr($url, 0,7);    // "http://"
	$https = substr($url, 0,8);    // "https://"


	if (strcmp($http,"http://") == 0 || substr($url, 0,7))    // "http://"
	{
		
	}

	if ($url)

	return preg_match('|^http(s)?://[a-z0-9-]+(.[a-z0-9-]+)*(:[0-9]+)?(/.*)?$|i', $url); // this line from http://phpcentral.com/208-url-validation-in-php.html
}

?>