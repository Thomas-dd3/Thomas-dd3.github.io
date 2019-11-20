<?php
/**
 * Created by PhpStorm.
 * User: Thomas
 * Date: 20/11/2019
 * Time: 4:48 PM
 */

$prevnames = file_get_contents('names.txt');

$prevnames .= "\n" . $_POST['name'];

file_put_contents('names.txt', $prevnames);


echo "Thanks!";