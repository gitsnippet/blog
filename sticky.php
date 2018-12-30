<?php
$dsn = "mysql:host=localhost;dbname=blog";
$con = new PDO($dsn,"root","xyzzy");
$sql = "select * from tmp where post_status='sticky' order by id desc limit 30";
$stmt = $con->prepare($sql);
$stmt->execute();
$res = $stmt->fetchAll();




?>


