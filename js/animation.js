'use strict'
let animationSidebar1 = document.getElementById("cv").addEventListener('mouseover', sidebarAppear);
let animationSidebar2 = document.getElementById("contact").addEventListener('mouseover', sidebarAppear);
let btnContact = document.getElementById("btn-contact").addEventListener('click', contactAppears);
function sidebarAppear(){
    var side = document.getElementById("sidebar");
    side.style.display = "block";
    side.style.transition = "3";
}
function contactAppears(){
    var contact = document.getElementById("contact");
    contact.style.display= "block";
}