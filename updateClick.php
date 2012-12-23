

<?php

/* --------------------------------------------------------------
     No Longer Needed Since This Takes Place In SideBar.php
/* --------------------------------------------------------------

$con = mysql_connect('localhost', 'root', 'root');
if (!$con)
  {
  die('Could not connect to mysql: ' . mysql_error() . "<hr/>");
  }

if (mysql_query("CREATE DATABASE SpaceForCharity_DB",$con))
  {
  echo "Database created <hr/>";
  }
else
  {
  echo "Error creating database: " . mysql_error() . "<hr/>";
  }

// Select Database
mysql_select_db("SpaceForCharity_DB", $con);
	
// Create Table
mysql_query("CREATE TABLE Stats ( ClickCount int )",$con);
echo ("Created Table in DataBase <hr/>");

// Check if ClickCount is already initialized
$ClickCount = mysql_result(mysql_query("SELECT * FROM Stats", $con), 0);
echo ("ClickCount = $ClickCount <hr/>");

if (!$ClickCount){
	// Insert Data
	mysql_query("INSERT INTO Stats (ClickCount) VALUES (1)");
					echo ("Inserted Initial Data into DataBase <hr/>");
} else {
	// Get Data
	mysql_query("SELECT ClickCount FROM Stats WHERE id=1");
					echo ("current ClickCount = $ClickCount <hr/>");

	// Increment ClickCount
	$newClickCount = $ClickCount + 1;
					echo ("incremented ClickCount = $newClickCount <hr/>");
	
	// Update Data in DataBase
	mysql_query("UPDATE Stats SET ClickCount=$newClickCount WHERE ClickCount = $ClickCount");
					echo ("Updated Data in DataBase <hr/>");
	
}

mysql_close($con);

header("Location: SideBar.php");


*/
?>