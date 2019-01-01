<?php
$id = $_GET["id"];

$dsn = "mysql:host=localhost;dbname=blog";
$con = new PDO($dsn,"root","xyzzy");
$sql = "select * from post where id = $id ";
$stmt = $con->prepare($sql);
$stmt->execute();
$res = $stmt->fetchAll();

$title = $res[0]['title'];
$content = $res[0]['content'];
$result = array("id" => $id,"title" => $title, "content" => $content);
echo json_encode($result);
?>


