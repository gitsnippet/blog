<?php
$id = trim($_POST["id"]);
$title = trim($_POST["title"]);
$content = trim($_POST["content"]);

$dsn = "mysql:host=localhost;dbname=blog";
$con = new PDO($dsn,"root","xyzzy");

$title = $con->quote($title);
$content = $con->quote($content);

try{
    $sql = "update post set title=$title,content=$content,status='publish' where id=$id";
    $stmt = $con->prepare($sql);
    $stmt->execute();
}catch(PDOException  $e)
{
    echo $e->getMessage();
}
?>
