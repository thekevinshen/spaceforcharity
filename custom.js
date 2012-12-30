/*
This File Contains:
1. Animations
	a. Mouse-over functions
	b. Hidden Div functions
2. Reload Functions
3. URL Parse Functions
4. Navigation Functions
*/

//-------------Animations-----------------
$(document).ready(function() {
	//-----------------Mouse-over functions-------------------
	$("#infoBox").hover(function(){
		$(this).addClass("grayBG");
	}, function(){
		$(this).removeClass("grayBG");
	});
	
	$("#howItWorks").hover(function(){
		$(this).addClass("grayDarkBG");
	}, function(){
		$(this).removeClass("grayDarkBG");
	});
	
	$("#about").hover(function(){
		$(this).addClass("grayDarkBG");
	}, function(){
		$(this).removeClass("grayDarkBG");
	});
	
	$("#home").hover(function(){
		$(this).addClass("grayDarkBG");
	}, function(){
		$(this).removeClass("grayDarkBG");
	});
	
	$("#logo").hover(function(){
		$(this).addClass("grayDarkBG");
	}, function(){
		$(this).removeClass("grayDarkBG");
	});
	
	//-----------------Hidden Div functions-------------------
	$("#howItWorks").toggle(function(){
		//close all divs and open this one
			$("#hiddenHowItWorks", parent.document).show("fold", 700);
			$("#hiddenAbout", parent.document).hide("fold", 700);
		}, function(){
		//hide all divs
			$("#hiddenHowItWorks", parent.document).hide("fold", 700);
			$("#hiddenAbout", parent.document).hide("fold", 700);
	});
		
	$("#about").toggle(function(){
		//close all divs and open this one
			$("#hiddenAbout", parent.document).show("fold", 700);
			$("#hiddenHowItWorks", parent.document).hide("fold", 700);
		}, function(){
		//hide all divs
			$("#hiddenHowItWorks", parent.document).hide("fold", 700);
			$("#hiddenAbout", parent.document).hide("fold", 700);
	});	

	$(".iconClose").click(function(){
		//close all divs
		$("#hiddenHowItWorks").hide("fold", 700);
		$("#hiddenAbout").hide("fold", 700);
	});

}); //End $(document).ready() functions


//---------------------------Reload Functions----------------------------------
function reloadSideBar() {
    var ifrm = document.getElementById('iSideBar');
   	if (ifrm)	{
			ifrm.setAttribute('src', 'SideBar.php');
   	}
}




//--------------------------URL Parse Functions-------------------------------
// This method takes in an inputted urlString, parses it according to the best guess of what 
// website or search the user is trying to navigate to, then returns the parsed string.
function urlParse(urlString)
{
	// Remove all of the whitespaces before the first character
		for (var i = 0; i < urlString.length; i++)
		{
			if (urlString.charAt(i) == " ")
			{
				urlString.replace(" ","");
			}
			else // a first character has been found
			{
				break; 
			}
		}


	// Determine if the user is trying to go directly to a website

		// 1. Begins with http:// 
		var indexOfHTTP = urlString.search("http://");
		if (indexOfHTTP == 0) // the http:// begins at index 0 of the urlString
		{
			return urlString;
		}

		// 2. Begins with https://
		var indexOfHTTPS = urlString.search("https://");
		if (indexOfHTTPS == 0) // the https:// begins at index 0 of the urlString
		{
			return urlString;
		}

		// 3. Begins with www.
		var indexOfWWW = urlString.search("www.");
		if (indexOfWWW == 0) // the www. begins at index 0 of the urlString
		{
			return "http://"+urlString; // just need to addd http:// to the beginning
		}

		// 4. Has a period with a character before and a character after (e.g. apple.com, news.net, etc.)
		var indexOfDot = urlString.lastIndexOf(".");
		var charBeforeDot = urlString.charAt(indexOfDot-1);
		var charAfterDot = urlString.charAt(indexOfDot+1);

		if (charBeforeDot != null && charBeforeDot != " " && 
			charAfterDot != null && charAfterDot != " ")
		{
			return "http://www."+urlString;
		}


	// Else the user is trying to do a search

		// 1. Replace all spaces with '+'
		for (var i = 0; i < urlString.length; i++)
		{
			if (urlString.charAt(i) == " ")
			{
				urlString.replace(" ","+");
			}
		}

		// 2. Append search query string
		return "http://www.bing.com/search?q="+urlString;

}





//--------------------------Navigation Functions-------------------------------
function goToUrl(){ //sends myFrame to url from form textfield. utilizes "landingGoToIFrameURL(string)" instead of goToIFrameURL(string), otherwise same as goToUrl(form)
	alert("in gotourl");
	var urlString = document.forms[0].elements["URLfieldName"].value;

	var ifrm = parent.document.getElementById('myFrame');
	
	
	
	
	
	
	if (ifrm) {
		var s = urlParse(urlString);

		alert("S = "+s);

		ifrm.setAttribute('src', urlParse(urlString));
	}
}

function myFrameReturnHome(){
	var ifrm = parent.document.getElementById('myFrame');
	if (ifrm) {
		ifrm.setAttribute('src', 'landing.html');
	}
}









