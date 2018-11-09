<?php
   $host        = "host = ec2-54-225-98-131.compute-1.amazonaws.com";
   $port        = "port = 5432";
   $dbname      = "dbname = d1uk2vnpdjl28q";
   $credentials = "user = npvswhggxgsgxk password=556e5013ea1dec59d2daa5d7bff223ec028c16da4ac577db94e78dbc75471965";
   $sslmode = "sslmode = require";
   $uri = "uri = postgres://npvswhggxgsgxk:556e5013ea1dec59d2daa5d7bff223ec028c16da4ac577db94e78dbc75471965@ec2-54-225-98-131.compute-1.amazonaws.com:5432/d1uk2vnpdjl28q";

   $db = pg_connect( "$host $port $dbname $credentials $sslmode"  );
   if(!$db) {
      echo "Error : Unable to open database\n";
   } else {
      echo "Opened database successfully\n";
   }
?>