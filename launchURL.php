$url = "https:/www.google.com/";

if ($url != null && $url != "" && $url != " "){
	// Do the URL Parsing Here.
	
	urlParse($url); // passed by reference
	
	echo("Final URL = \n\n\n\n");
	echo($url);
	
	//header( 'Location: '.$url);
} else {
	header( 'Location: landing.html');
}

/** STILL WORKING ON THIS (Ryan) **/



function urlParse(&$url)
{
	$url = trim($url); // removes whitespaces from beginning and end

	$http = substr($url, 0,7);    // "http://"
	$https = substr($url, 0,8);    // "https://"
	$www = substr($url, 0,4); // www.

//	echo("http ===> ".$http."\n");
//	echo("https ===> ".$https."\n");
//	echo("www ===> ".$www."\n");

	if ((strcmp($http,"http://") == 0 || (strcmp($https,"https://") == 0 )))    // string either starts with 'http://' or 'https://'
	{
		if (preg_match('|^http(s)?://[a-z0-9-]+(.[a-z0-9-]+)*(:[0-9]+)?(/.*)?$|i', $url)) // this line from http://phpcentral.com/208-url-validation-in-php.html
		{
			// The string is a valid URL
			return $url;
		}
		else
		{
			bingURL($url);
		}
	}
	else if (strcmp($www,"www.") == 0) // string starts with 'www.'
	{
		$url = "http://".$url; // append 'http://' to the beginning of the url string
	}
	else if ((strpos($url," ") === false) && 
	strContainsPeriodWithCharactersBeforeAndAfterIt($url) === true) // triple equals checks for the boolean value of "was it found or not?"
	{
		$url = "http://www.".$url; // url was just missing the http://www. 	
	}
	else // BING IT!
	{
		bingURL($url); // Create the bing search string (passed by reference)
	}
}

function bingURL(&$url)
{
		$url = "http://www.bing.com/?q=".str_replace(" ","+",$url); // Bing search url is more complex than this, but this is a good start
		return $url;
}


function containsStrFromArr($str, array $arr)
{
    foreach($arr as $a) {
        if (stripos($str,$a) !== false) return true; // insensitive comparison, tries to find first instance of a in str
    }
    return false;
}

function strContainsPeriodWithCharactersBeforeAndAfterIt($str)
{
	if (stripos($str,".") !== false) // make sure the string contains a period first
	{
		$position = stripos($str,".");
													// testing.com
		$strAfterPeriod = substr($str,$position+1,1); // c
		$strBeforePeriod = substr($str,$position-1,1); // g
		
		//echo("before.=".$strBeforePeriod."\n");
		//echo("after.=".$strAfterPeriod."\n");
		
		if (strcmp($strAfterPeriod," ") != 0 &&
			strcmp($strBeforePeriod," ") != 0 && strlen($str) != ($position+1))
			{
				return true;
			}
	}
	
	//echo("\n\n containssvalidperiod = false!");
	return false;
	
}





