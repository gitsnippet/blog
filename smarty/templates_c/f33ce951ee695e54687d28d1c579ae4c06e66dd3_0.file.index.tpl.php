<?php
/* Smarty version 3.1.34-dev-7, created on 2018-12-31 21:01:07
  from '/var/www/html/blog/index.tpl' */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.34-dev-7',
  'unifunc' => 'content_5c2a1313439b19_78041853',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    'f33ce951ee695e54687d28d1c579ae4c06e66dd3' => 
    array (
      0 => '/var/www/html/blog/index.tpl',
      1 => 1546261259,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
),false)) {
function content_5c2a1313439b19_78041853 (Smarty_Internal_Template $_smarty_tpl) {
?><!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title></title>
    <link rel="stylesheet" href="style.css" style="text/css">
</head>
<body>
    <div id="main">
    <div id="left">
        <ul>
        <?php
$_from = $_smarty_tpl->smarty->ext->_foreach->init($_smarty_tpl, $_smarty_tpl->tpl_vars['results']->value, 'record');
if ($_from !== null) {
foreach ($_from as $_smarty_tpl->tpl_vars['record']->value) {
?>
            <li myid=<?php echo $_smarty_tpl->tpl_vars['record']->value["id"];?>
><?php echo $_smarty_tpl->tpl_vars['record']->value["title"];?>
</li>
        <?php
}
}
$_smarty_tpl->smarty->ext->_foreach->restore($_smarty_tpl, 1);?>
        </ul>
    </div>
    <div id="middle">
        <div id="title" myid=<?php echo $_smarty_tpl->tpl_vars['results']->value[0]['id'];?>
>
             <?php echo $_smarty_tpl->tpl_vars['results']->value[0]['title'];?>

        </div>
        <textarea cols="120" rows="60" id="content" readonly="readonly">
             <?php echo $_smarty_tpl->tpl_vars['results']->value[0]['content'];?>

        </textarea>    
    </div>
    <div id="right">
        <div id="new">new</div>
        <div id="edit">edit</div>
        <div id="delete">delete</div>
        <div id="publish">publish</div>
        <div id="sticky">sticky</div>
        <div id="trash">trash</div>
    </div>
    <div id="search"></div>
    </div>
    <?php echo '<script'; ?>
 src="callContent.js"><?php echo '</script'; ?>
>
    <?php echo '<script'; ?>
 src="change.js"><?php echo '</script'; ?>
>
</body>
</html>



<?php }
}
