<?php

// Called from "landing.html" upon entering a URL

$url = $_GET['URLfieldName'];
if ($url != null && $url != "" && $url != " "){
	// Do the URL Parsing Here.
	echo("2 url parse");
	header( 'Location: http://'.$url);
} else {
	header( 'Location: landing.html');
}

/** STILL WORKING ON THIS (Ryan) **/


function urlParse($url)
{
	$url = trim($url); // removes whitespaces from beginning and end

	$http = substr($url, 0,7);    // "http://"
	$https = substr($url, 0,8);    // "https://"
	$www = substr($url, 0,4); // www.


	if ((strcmp($http,"http://") == 0 || (strcmp($https,"https://") == 0 )))    // string either starts with 'http://' or 'https://'
	{
		if (preg_match('|^http(s)?://[a-z0-9-]+(.[a-z0-9-]+)*(:[0-9]+)?(/.*)?$|i', $url)) // this line from http://phpcentral.com/208-url-validation-in-php.html
		{
			// The string is a valid URL
			echo($url);
			return $url;
		}
		else
		{
			$returnStr = bingURL($url);
			echo("http attempt invalid; bing str = ".$returnStr);
			return $returnStr;
		}
	}
	else if (strcmp($www,"www.") == 0) // string starts with 'www.'
	{
		$returnStr = "http://".$url; // append 'http://' to the beginning of the url string
		echo($returnStr);
		return $returnStr;
	}
	else // BING IT!
	{
		$returnStr = bingURL($url);
		echo($returnStr);
		return $returnStr;
	}
}

function bingURL($str)
{
		$returnStr = "http://www.bing.com/?q=".str_replace(" ","+",$url); // Bing search url is more complex than this, but this is a good start
		return $returnStr;
}




?>



