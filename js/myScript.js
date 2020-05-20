var btnBg1 = document.getElementById("changeBg1");
var whiteBtn = document.getElementById("whiteBg");
var closebtn = document.getElementById("closebtn");

function changeBackground1(){
    document.body.style.backgroundImage = "url('images/bg2.jpg')";
    btnBg1.setAttribute("class","btn btn-success");
    whiteBtn.setAttribute("class","btn btn-secondary");
}

function whiteBackground(){
    document.body.style.backgroundImage = "none";
    btnBg1.setAttribute("class","btn btn-secondary");
    whiteBtn.setAttribute("class","btn btn-success");
}

function closeWindow(){
    value = confirm("Are you sure you want to exit ?");
    if(value){
        window.close();
    }
}

btnBg1.addEventListener("click",changeBackground1);
whiteBtn.addEventListener("click",whiteBackground);
closebtn.addEventListener("click",closeWindow);

