function callContent(event){
    var xmlHttp = new XMLHttpRequest;
    var eventTarget = event.target;
    var title_id = eventTarget.name;
    alert(title_id);
    xmlHttp.open("post", "show.php",true); 
    xmlHttp.send("title_id"); 
    xmlHttp.onreadystatechange =  function(){
        alert(xmlHttp.responseText);
    }     
}

ob = document.getElementById("left");
ob.addEventListener("click", callContent, true);
