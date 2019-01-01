function fnew()
{
    var xmlHttp = new XMLHttpRequest;
    var title = document.getElementById("title");
    var content = document.getElementById("content");
    title.removeAttribute("myid");
    title.innerHTML = "";
  　var input = document.createElement("input");
    input.setAttribute("id","input_id");
　  input.setAttribute("myid", "-1");
    input.style.cssText='width:100%;height:100%;box-sizing: border-box;';
　　title.appendChild(input);
    content.value = "";
}

function fedit()
{
    var title = document.getElementById("title");
    title_content = title.innerHTML;
    var t_id =  title.getAttribute("myid");
  　var input = document.createElement("input");
    input.setAttribute("id","input_id");
　  input.setAttribute("myid",t_id);
　  input.setAttribute("type","text");
    input.style.cssText='width:100%;height:100%;box-sizing: border-box;';
    input.value = title_content;
    title.innerHTML = "";
　　title.appendChild(input);
}


function fpublish()
{
    var container = document.getElementById("title");
    var input = document.getElementById("input_id");
    var title = input.value;
    if(title == "")
    {
        alert("title can not be empty");
        return false;
    }
    var content = document.getElementById("content").value;
    var flag = input.getAttribute("myid");
    if(flag == "-1")
    {
        var xmlHttp = new XMLHttpRequest;
        xmlHttp.open("post", "publish_insert.php" ,true); 
        xmlHttp.setRequestHeader("content-type","application/x-www-form-urlencoded");
        var info = "title=" + title + "&content=" + content;
        xmlHttp.send(info); 
        xmlHttp.onreadystatechange =  function()
        {
            if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            {
                var id = xmlHttp.responseText;
                container.removeChild(input);        
                container.setAttribute("myid",id);
                container.innerHTML = title;
                window.location.reload();
            }
        } 
    }
    if(flag != "-1"){
        var xmlHttp = new XMLHttpRequest;
        xmlHttp.open("post", "publish_update.php" ,true); 
        xmlHttp.setRequestHeader("content-type","application/x-www-form-urlencoded");
        var id = flag;
        var info = "id=" + id + "&title=" + title + "&content=" + content;
        xmlHttp.send(info);
        xmlHttp.onreadystatechange =  function()
        {
            if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            {
                container.removeChild(input);        
                container.innerHTML = title;
                window.location.reload();
            }
        } 
    }
}

function fdelete()
{
    var id = document.getElementById("title").getAttribute("myid");
    var xmlHttp = new XMLHttpRequest;
    var msg = "您真的确定要删除吗？\n\n请确认！"; 
    if (confirm(msg)!=true)
    { 
        return false; 
    } 
    xmlHttp.open("post", "delete.php" ,true); 
    xmlHttp.setRequestHeader("content-type","application/x-www-form-urlencoded");
    var info = "id=" + id;
    xmlHttp.send(info); 
    xmlHttp.onreadystatechange =  function()
    {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
        {
            console.log(xmlHttp.responseText);
            window.location.reload();
        }
    }
}

function change(event){
    var flag = event.target;
    switch(flag.id){
        case "new":
            fnew();
            break;
        case "edit":
            fedit();     
            break;
        case "delete":
            fdelete();
            break;
        case "publish":
            fpublish();
            break;
        case "sticky":
            fsticky();     
            break;
        case "trash":
            ftrash();     
            break;
    }
}

ob_change = document.getElementById("right");
ob_change.addEventListener("click",change);
