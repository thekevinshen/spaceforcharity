/*
This File Contains:
1. Animations
2. Reload Functions
3. Navigation Functions

*/

//-------------Animations-----------------
$(document).ready(function() {
	$("a").click(function(){
	});
	
	$("#infoBox").hover(function(){
		$(this).removeClass("lightGrayBG");
		$(this).addClass("grayBG");
	}, function(){
		$(this).removeClass("grayBG");
		$(this).addClass("lightGrayBG");
	});
	
	$("#about").toggle(function(){
		$("#aboutContent").show("slow");
	}, function(){
		$("#aboutContent").hide("slow");
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
	}, function(){
		$("#hiddenHowItWorks", parent.document).hide("fold", 700);
	});

}); //End $(document).ready() functions


//---------------------------Reload Functions----------------------------------
function iFrameClicked(){
	reloadSideBar();
}

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
	goToIFrameURL(urlString);
}

function goToIFrameURL(string){ //triggers myFrame reload from inside SideBar (needa "parent.document" since myFrame is in the parent window)
	var ifrm = parent.document.getElementById('myFrame');
	if (ifrm) {
		ifrm.setAttribute('src', 'http://'+string);
	}
}

function myFrameReturnHome(){
	var ifrm = parent.document.getElementById('myFrame');
	if (ifrm) {
		ifrm.setAttribute('src', 'landing.html');
	}
}




