<?php

if(!filter_input(INPUT_POST, 'email'))
{
    die('access denied.');
}
$email = filter_input(INPUT_POST, 'email');
$image = filter_input(INPUT_POST, 'image');
echo $image;
$rating = filter_input(INPUT_POST, 'rating');
echo ' / '.$rating.' ';
$con = mysqli_connect("localhost", "sandruan_sandru", "d,gd.!z=2zD7", "sandruan_proteste");

//checking
$emailVerification = mysqli_query($con, "SELECT email FROM proteste_table WHERE email='" . $email . "'");

if (!$emailVerification) {
    die('Error: ' . mysqli_error($con));
}

if (mysqli_num_rows($emailVerification) > 0) {

//    echo '/ email already exists';
    $updateRated = mysqli_query($con, "UPDATE proteste_table SET rated = CONCAT(rated,',".$image."') WHERE email = '" . $email . "'");
    $imageToSaveString = 'poza'.$image;
    $saveImageRating = mysqli_query($con, "UPDATE proteste_table SET ".$imageToSaveString." = $rating WHERE email = '" . $email . "'");

} else {
    //nu exista
//    echo 'email nu exista';
    $createNewUser = mysqli_query($con, "INSERT INTO proteste_table (email, rated, poza".$image.") VALUES ('" . $email . "', '" . $image . "', '" . $rating . "')");
}