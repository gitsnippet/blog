<?php
$title = $_POST["title"];
$content = $_POST["content"];
$id = $_POST["id"];

$dsn = "mysql:host=localhost;dbname=blog";
$con = new PDO($dsn,"root","xyzzy");

$title = $con->quote($title);
$content = $con->quote($content);

$sql = "update tmp set `title`='$title' and `content`='$content' where `id`='$id'";
$stmt = $con->prepare($sql);
$stmt->execute();


