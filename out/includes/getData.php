<?php
$connection = pg_connect ("host=ec2-54-225-98-131.compute-1.amazonaws.com port=5432 dbname=d1uk2vnpdjl28q user=npvswhggxgsgxk password=556e5013ea1dec59d2daa5d7bff223ec028c16da4ac577db94e78dbc75471965");
if($connection) {
    echo 'connected';
} else {
    echo 'there has been an error connecting';
}
?>