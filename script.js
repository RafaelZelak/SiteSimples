const menu = document.querySelector('nav');


function activeScroll(){
    menu.classList.toggle('ativo', scrollY > 400);
}



window.addEventListener('scroll', activeScroll);

let count = 1
document.getElementById("radio1").checked = true

setInterval(function(){
    nextImage();
},7000)

function nextImage(){
    count++;
    if(count>4){
        count = 1;
    }
    document.getElementById("radio"+count).checked=true;
}