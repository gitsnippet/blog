<?php
$id = trim($_POST["id"]);
try
{
    $dsn = "mysql:host=localhost;dbname=blog";
    $con = new PDO($dsn,"root","xyzzy");
    $con->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
    $sql = "delete from tmp where id = $id";
    $stmt = $con->prepare($sql);
    $stmt->execute();
}
catch(PDOException $e) 
{
    echo  $e->getMessage();
}
?>

