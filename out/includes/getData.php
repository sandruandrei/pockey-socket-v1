<?php

if(!filter_input(INPUT_POST, 'idToCheck'))
{
    echo 'salam1';
    die('access denied.');
}
else
{
    $idToCheck = filter_input(INPUT_POST, '$idToCheck');

    $con = pg_connect("host=ec2-54-225-98-131.compute-1.amazonaws.com port=5432 dbname=d1uk2vnpdjl28q user=npvswhggxgsgxk password=556e5013ea1dec59d2daa5d7bff223ec028c16da4ac577db94e78dbc75471965");

    //checking
//    $idVerification = mysqli_query($con, "SELECT USER_ID FROM pockey_table WHERE USER_ID='" . $idToCheck . "'");
//
//    if (!$idVerification) {
//        echo 'salam2';
//        die('Error: ' . mysqli_error($con));
//    }
//
//    if (mysqli_num_rows($idVerification) > 0) {
//
//        //email already exists
//        $ratedQuery = mysqli_query($con, "SELECT rated FROM proteste_table WHERE USER_ID = '" . $idToCheck . "'") or die('nu vrea');
//
//        while ($ratedResult = mysqli_fetch_assoc($ratedQuery)) {
//            echo $ratedResult["rated"];
//        }
//
//    } else {
//        //email doesn't exist
//        echo 'salam3';
//    }
}


