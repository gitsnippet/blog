<?php
$id = $_GET["id"];
$dsn = "mysql:host=localhost;dbname=blog";
$con = new PDO($dsn,"root","xyzzy");
$sql = "select * from tmp where id = $id ";
$stmt = $con->prepare($sql);
$stmt->execute();
$res = $stmt->fetchAll();
$content = $res[0][3];
echo $content;
?>


