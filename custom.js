/*
This File Contains:
1. Animations
	a. Mouse-over functions
	b. Hidden Div functions
2. Reload Functions
3. Navigation Functions
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
	$("#howItWorks").click(function(){
		if (condit = $("#hiddenHowItWorks").is(":visible")){ 
			//if this div is already open, then hide all divs
			$("#hiddenHowItWorks", parent.document).hide("fold", 700);
			$("#hiddenAbout", parent.document).hide("fold", 700);
		} else {
			//if this div is not open, close all divs and open this one
			$("#hiddenAbout", parent.document).hide("fold", 700);
			$("#hiddenHowItWorks", parent.document).show("fold", 700);
		}
	});
		
	$("#about").click(function(){
		if (condit = $("#hiddenHowItWorks").is(":visible")){
			//if this div is already open, then hide all divs
			$("#hiddenHowItWorks", parent.document).hide("fold", 700);
			$("#hiddenAbout", parent.document).hide("fold", 700);
		} else {
			//if this div is not open, close all divs and open this one
			$("#hiddenAbout", parent.document).show("fold", 700);
			$("#hiddenHowItWorks", parent.document).hide("fold", 700);
		}
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

//--------------------------Navigation Functions-------------------------------
function goToUrl(){ //sends myFrame to url from form textfield. utilizes "landingGoToIFrameURL(string)" instead of goToIFrameURL(string), otherwise same as goToUrl(form)
	var urlString = document.forms[0].elements["URLfieldName"].value;

	var ifrm = parent.document.getElementById('myFrame');
	if (ifrm) {
		ifrm.setAttribute('src', 'http://'+urlString);
	}
}

function myFrameReturnHome(){
	var ifrm = parent.document.getElementById('myFrame');
	if (ifrm) {
		ifrm.setAttribute('src', 'landing.html');
	}
}




