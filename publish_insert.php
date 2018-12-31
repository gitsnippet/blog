<?php
$title = trim($_POST["title"]);
$content = trim($_POST["content"]);

$dsn = "mysql:host=localhost;dbname=blog";
$con = new PDO($dsn,"root","xyzzy");

$title = $con->quote($title);
$content = $con->quote($content);

try{
    $sql = "insert into tmp (`title`,`content`) values($title,$content)";
    $stmt = $con->prepare($sql);
    $stmt->execute();
}catch(PDOException  $e)
{
    echo $e->getMessage();
}
$sql_id = "select max(`id`) from tmp";
$stmt = $con->prepare($sql_id);
$stmt->execute();
$id = $stmt->fetchAll()[0][0];

echo $id;
?>


