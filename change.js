
function fnew(){
    var xmlHttp = new XMLHttpRequest;
    var title = document.getElementById("title");
    var content = document.getElementById("content");
    title.setAttribute("myid","-1");
    title.innerHTML = "";
    content.innerHTML = "";
}

function change(event){
    var flag = event.target;
    switch(flag.id){
        case "sticky":
            fsticky();     
            break;
        case "new":
            fnew();
            break;
        case "delete":
            fdelete();
            break;
        case "publish":
            fpublish();
            break;
    }
}

ob_change = document.getElementById("right");
ob_change.addEventListener("click",change);
