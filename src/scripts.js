
const menu = document.getElementById("menu");
const nav = document.getElementById("container_links");
const itemNav = document.querySelectorAll(".item_nav");










menu.addEventListener("click", ()=>{

    if(nav.classList.contains("hidden")){

        nav.classList.remove("hidden");
        nav.classList.add("flex");
    } else{

        nav.classList.add("hidden");
        nav.classList.remove("flex");
        
    }

});

