let hello=document.querySelector(".hello");
let home_text=document.querySelector(".home_text");
let profil=document.querySelector(".profil");
let carry=document.querySelector(".carry");
let cercle=document.querySelector(".cercle");
let oualidimg=document.querySelector(".oualidimg");
let skills=document.querySelector(".skills");
let skills_chois =document.querySelectorall
window.onscroll=function(){
  if(window.scrollY >= profil.offsetTop-100){
    carry.style.width= carry.dataset.width;
    cercle.style.width= cercle.dataset.width;
    oualidimg.style.width= oualidimg.dataset.width;
  }
    
}

window.onload=function(){

    hello.style.opacity= hello.dataset.opacity;
    home_text.style.fontSize = home_text.dataset.fontSize; 
    
}

/*display deffirents skills */
window.onscroll=function(){
  if(window.scrollY >= skills.offsetTop-100){
    skills_chois.style.width= skills_chois.dataset.width;
    
    
  }
    
}









