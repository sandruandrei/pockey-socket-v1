<?php
   $host        = "host = localhost";
   $port        = "port = 5000";
   $dbname      = "dbname = postgres";
   $credentials = "user = postgres password=sb1947ll";
   $sslmode = "sslmode = require";

   $db = pg_connect( "$host $port $dbname $credentials $sslmode"  );
   if(!$db) {
      echo "Error : Unable to open database\n";
   } else {
      echo "Opened database successfully\n";
   }
?>