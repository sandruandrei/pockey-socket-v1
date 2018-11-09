<?php

if(!filter_input(INPUT_POST, 'idToCheck'))
{
    echo 'salam1';
    die('access denied.');
}
else
{
    $idToCheck = filter_input(INPUT_POST, '$idToCheck');

    $con = mysqli_connect("localhost", "sandruan_sandru", "d,gd.!z=2zD7", "sandruan_proteste");

    //checking
    $idVerification = mysqli_query($con, "SELECT USER_ID FROM pockey_table WHERE USER_ID='" . $idToCheck . "'");

    if (!$idVerification) {
        echo 'salam2';
        die('Error: ' . mysqli_error($con));
    }

    if (mysqli_num_rows($idVerification) > 0) {

        //email already exists
        $ratedQuery = mysqli_query($con, "SELECT rated FROM proteste_table WHERE USER_ID = '" . $idToCheck . "'") or die('nu vrea');

        while ($ratedResult = mysqli_fetch_assoc($ratedQuery)) {
            echo $ratedResult["rated"];
        }

    } else {
        //email doesn't exist
        echo 'salam3';
    }
}


