let hamburgerBtn = document.getElementById("hamburger-btn");
let hamburgerMenu = document.getElementById("hamburger");
let sidebarClose = document.getElementById("sidebar-close");

function hamburgerClick(){
  let element = document.getElementById("hamburger");
  element.classList.add("showMenu");
  sidebarClose.style.display="block";
}
hamburgerBtn.addEventListener("click",hamburgerClick);

function crossClick(){
  let element = document.getElementById("hamburger");
  element.classList.remove("showMenu");
  sidebarClose.style.display="none";
}
sidebarClose.addEventListener("click",crossClick);
