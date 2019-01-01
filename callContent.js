function callContent(event)
{
    var xmlHttp = new XMLHttpRequest;
    var title_id = event.target.getAttribute("myid");
    url = "show.php" + "/?id=" + title_id;
    xmlHttp.open("get", url ,true); 
    xmlHttp.send(); 
    xmlHttp.onreadystatechange =  function()
    {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
        {
            result = xmlHttp.responseText;
            var title = JSON.parse(result)["title"];
            var content =  JSON.parse(result)["content"];
            var id = JSON.parse(result)["id"];
            el_title = document.getElementById("title");
            el_content = document.getElementById("content");
            el_title.setAttribute("myid",id);
            el_title.innerHTML = title;
            el_content.value = content;
        }
    }     
}

ob = document.getElementById("left");
ob.addEventListener("click", callContent, true);
