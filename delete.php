<?php
$id = trim($_POST["id"]);
try
{
    $dsn = "mysql:host=localhost;dbname=blog";
    $con = new PDO($dsn,"root","xyzzy");
    $id = $con->quote($id);
    $con->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
    $sql = "update post set status='trash' where id=$id";
    $stmt = $con->prepare($sql);
    $stmt->execute();
}
catch(PDOException $e) 
{
    echo  $e->getMessage();
}
?>

