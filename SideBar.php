<html>
<head>
	<link href="styles.css" rel="stylesheet" type="text/css">
	<!--jQuery-->
	<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>
	<script src="http://code.jquery.com/ui/1.9.2/jquery-ui.js"></script>
	<script type="text/javascript" src="custom.js"></script>
	
	<?php
	

	$services_json = json_decode(getenv("VCAP_SERVICES"),true);
	$mysql_config = $services_json["mysql-5.1"][0]["credentials"];
	$username = $mysql_config["username"];
	$password = $mysql_config["password"];
	$hostname = $mysql_config["hostname"];
	$port = $mysql_config["port"];
	$db = $mysql_config["name"];
	$con = mysql_connect("$hostname:$port", $username, $password);
	if (!$con)
	  {
	  die('Could not connect to mysql: ' . mysql_error() . "<hr/>");
	  }
	$db_selected = mysql_select_db($db, $con);

	if (mysql_query("CREATE DATABASE SpaceForCharity_DB",$con))
	  {
	  //echo "Database created <hr/>";
	  }
	else
	  {
	  //echo "Error creating database: " . mysql_error() . "<hr/>";
	  }

	// Select Database
	mysql_select_db("SpaceForCharity_DB", $con);

	// Create Table
	mysql_query("CREATE TABLE Stats ( ClickCount int )",$con);
						//echo ("Created Table in DataBase <hr/>");

	// Check if ClickCount is already initialized
	$ClickCount = mysql_result(mysql_query("SELECT * FROM Stats", $con), 0);
						//echo ("ClickCount = $ClickCount <hr/>");

	if (!$ClickCount){
		// Insert Data
		mysql_query("INSERT INTO Stats (ClickCount) VALUES (1)");
						//echo ("Inserted Initial Data into DataBase <hr/>");
	} else {
		// Get Data
		mysql_query("SELECT ClickCount FROM Stats WHERE id=1");
						//echo ("current ClickCount = $ClickCount <hr/>");

		// Increment ClickCount
		$newClickCount = $ClickCount + 1;
						//echo ("incremented ClickCount = $newClickCount <hr/>");

		// Update Data in DataBase
		mysql_query("UPDATE Stats SET ClickCount=$newClickCount WHERE ClickCount = $ClickCount");
						//echo ("Updated Data in DataBase <hr/>");

	}

	mysql_close($con);
	?>
	
	
</head>
<body>
	<div id="sidebar" class="span3">
	
		<div id="infoBox">
			<div id="logoDiv">
				<h1> <a href="" id="logo" onclick="myFrameReturnHome()">Space <small style="color:lightgray;font-style:normal">For</small><br />Charity</a></h1>
				<br style="clear:both">
			</div>
			<div id="siteStats">
				<b><?php 	echo($newClickCount);	?></b><font class="statText"> Total pages visits</font> <br />
				<b style="color:orange"><?php 	echo("$".$newClickCount*0.001);	?></b><font class="statText"> Total raised</font> <br />
				<small style="color:gray; float:right; font-size: .5em">(assuming $1 CPM) </small>
			</div>
			<div class="bingBar">
				<form id="URLform" class="lightGray">
					<div class="row">
						<input id="URLfield" name="URLfieldName" type="text" placeholder="URL"></input>
						<button onclick="goToUrl()">Go</button>
					</div>
				</form>
			</div>
			<div id="aboutLinks">
				<a href="" id="howItWorks">How it works</a><font color="lightgray"> | </font><a id="about" href="">About</a><font color="lightgray"> | </font><a id="home" href="" onclick="myFrameReturnHome()">Home</a>
				<p id="aboutContent">What we're all about. <br/> SpaceForCharity is a web project by Kevin Shen, Ryan Cleary, and Johnny Rusnak to provide an innovative way for people all across the world to contribute to and become educated about poverty around the world.</p>
			</div>
			

		</div>

		<div id="adsBox">
			<!--<font color="#c0c0c0">Ads Box</font><br />-->
		
			<!--GoogleAdsense-->
			<script type="text/javascript"><!--
			google_ad_client = "ca-pub-8611093187067707";	/* WideTall */	google_ad_slot = "4884186374";	google_ad_width = 160;	google_ad_height = 600;	//-->	</script>
			<script type="text/javascript" src="http://pagead2.googlesyndication.com/pagead/show_ads.js"></script>
			
			<script type="text/javascript"><!--
			google_ad_client = "ca-pub-8611093187067707";	/* WideTall */	google_ad_slot = "4884186374";	google_ad_width = 160;	google_ad_height = 600;	//-->	</script>
			<script type="text/javascript" src="http://pagead2.googlesyndication.com/pagead/show_ads.js"></script>
			
			<script type="text/javascript"><!--
			google_ad_client = "ca-pub-8611093187067707";	/* WideTall */	google_ad_slot = "4884186374";	google_ad_width = 160;	google_ad_height = 600;	//-->	</script>
			<script type="text/javascript" src="http://pagead2.googlesyndication.com/pagead/show_ads.js"></script>
		
		</div><!--adsBox-->
	</div><!--span3-->




</body>

</html>