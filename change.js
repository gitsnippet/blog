
function fnew(){
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

function fpublish(){
    var input = document.getElementById("input_id");
    var title = input.value;
    if(title == ""){
        alert("title can not be empty");
        return false;
    }
    var content = document.getElementById("content").value;
    var flag = input.getAttribute("myid");
    if(flag == "-1"){
        var xmlHttp = new XMLHttpRequest;
        xmlHttp.open("post", "publish_insert.php" ,true); 
        xmlHttp.setRequestHeader("content-type","application/x-www-form-urlencoded");
        var info = "title=" + title + "&content=" + content;
        xmlHttp.send(info); 
        xmlHttp.onreadystatechange =  function(){
            if (xmlHttp.readyState == 4 && xmlHttp.status == 200){
                var id = xmlHttp.responseText;
                var container = document.getElementById("title");
                container.setAttribute("myid","id");
                container.innerHTML = title;
                input.parentNode.removeChild(input);        
            }
        } 
    }
    if(flag == "edit"){
        xmlHttp.open("post", "publish_update.php" ,true); 
        xmlHttp.setRequestHeader("content-type","application/x-www-form-urlencoded");
        var id = "";
        var info = "";
        xmlHttp.send(info);
    }
}

function fdelete()
{
    var id = document.getElementById("title").getAttribute("myid");
    var xmlHttp = new XMLHttpRequest;
    alert(id);
    xmlHttp.open("post", "delete.php" ,true); 
    xmlHttp.setRequestHeader("content-type","application/x-www-form-urlencoded");
    var info = "id=" + id;
    xmlHttp.send(info); 
    xmlHttp.onreadystatechange =  function()
    {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
        {
            console.log("ok");
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
        case "drop":
            fdrop();     
            break;
        case "publish":
            fpublish(flag.id);
            break;
        case "delete":
            fdelete();
            break;
        case "sticky":
            fsticky();     
            break;
    }
}

ob_change = document.getElementById("right");
ob_change.addEventListener("click",change);
