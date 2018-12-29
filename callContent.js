function callContent(event){
    var xmlHttp = new XMLHttpRequest;
    var eventTarget = event.target;
    var title_id = eventTarget.name;
    url = "show.php" + "/?id=" + title_id;
    xmlHttp.open("get", url ,true); 
    xmlHttp.send(); 
    xmlHttp.onreadystatechange =  function(){
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200){
            content = xmlHttp.responseText;
            console.log(content);
            el = document.getElementById("result");
            el.value = content;
        }
    }     
}

ob = document.getElementById("left");
ob.addEventListener("click", callContent, true);
