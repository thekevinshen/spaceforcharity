/*
This File Contains:
1. Animations
2. Reload Functions
3. Navigation Functions

*/

//-------------Animations-----------------
$(document).ready(function() {
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
	
	$("#howItWorks").toggle(function(){
		$("#hiddenHowItWorks", parent.document).show("fold", 700);
		// hide the rest of the divs in case any are open
		$("#hiddenAbout", parent.document).hide("fold", 700);
	}, function(){
		$("#hiddenHowItWorks", parent.document).hide("fold", 700);
	});

	$("#about").toggle(function(){
		$("#hiddenAbout", parent.document).show("fold", 700);
		// hide the rest of the divs in case any are open
		$("#hiddenHowItWorks", parent.document).hide("fold", 700);
	}, function(){
		$("#hiddenAbout", parent.document).hide("fold", 700);
	});

	$(".iconClose").click(function(){
		$("#hiddenHowItWorks").hide("fold", 700);
	});
	

}); //End $(document).ready() functions

//---------------------------Hidden Div functions----------------------

/*function closeAllDivs(){
	//close all divs
	hideAllHiddenDivs();
}
function hideAllHiddenDivs(div){	
	alert("this div = " + div.id);
	//div.hide("fold", 700);
	
	//$("#hiddenHowItWorks", parent.document).hide("fold", 700);
	//$("#hiddenAbout", parent.document).hide("fold", 700);
}*/

//---------------------------Reload Functions----------------------------------
function reloadSideBar() {
    var ifrm = document.getElementById('iSideBar');
   	if (ifrm)	{
			ifrm.setAttribute('src', 'SideBar.php');
   	}
}

//--------------------------Navigation Functions-------------------------------
function goToUrl(){ //sends myFrame to url from form textfield. utilizes "landingGoToIFrameURL(string)" instead of goToIFrameURL(string), otherwise same as goToUrl(form)
	var thisForm = document.forms[0];
	var thisTextField = thisForm.elements["URLfieldName"];
	var urlString = thisTextField.value;

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




