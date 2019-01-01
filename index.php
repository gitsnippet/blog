<?php
require('/usr/local/lib/Smarty/libs/Smarty.class.php');
$smarty = new Smarty();

$smarty->setTemplateDir('/var/www/html/blog/smarty/templates');
$smarty->setCompileDir('/var/www/html/blog/smarty/templates_c');
$smarty->setCacheDir('/var/www/html/blog/smarty/cache');
$smarty->setConfigDir('/var/www/html/blog/smarty/configs');

$dsn = "mysql:host=localhost;dbname=blog";
$con = new PDO($dsn,"root","xyzzy");
$sql = "select * from post where status != 'trash' order by id desc limit 30";
$stmt = $con->prepare($sql);
$stmt->execute();
$res = $stmt->fetchAll();

$smarty->assign('results', $res);
$smarty->display('index.tpl');

?>
