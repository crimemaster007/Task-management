let hamburgerBtn = document.getElementById("hamburger-btn");
let hamburgerMenu = document.getElementById("hamburger");
let sidebarClose = document.getElementById("sidebar-close");

hamburgerMenu.style.display="none";
function hamburgerClick(){
  let element = document.getElementById("hamburger");
  element.classList.add("showMenu");
  sidebarClose.style.display="block";
  hamburgerMenu.style.display="block";
}
hamburgerBtn.addEventListener("click",hamburgerClick);

function crossClick(){
  let element = document.getElementById("hamburger");
  element.classList.remove("showMenu");
  sidebarClose.style.display="none";
  hamburgerMenu.style.display="none";
}
sidebarClose.addEventListener("click",crossClick);
