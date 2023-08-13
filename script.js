let taskbar = document.getElementsByClassName("taskbar")[0]
let startmenu = document.getElementsByClassName("startmenu")[0]
taskbar.addEventListener("click",()=>{
    console.log("clicked");
    if(startmenu.style.bottom == "60px"){
        startmenu.style.bottom="-700px"
    }
    else{
        startmenu.style.bottom="60px"
    }
})

