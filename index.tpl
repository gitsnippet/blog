<!DOCTYPE html>
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
        {foreach $results as $record}
            <li myid={$record["id"]}>{$record["title"]}</li>
        {/foreach}
        </ul>
    </div>
    <div id="middle">
        <div id="title" myid={$results[0].id}>
             {$results[0].title}
        </div>
        <textarea cols="120" rows="60" id="content">
             {$results[0].content}
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
    <script src="callContent.js"></script>
    <script src="change.js"></script>
</body>
</html>



