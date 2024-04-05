var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("online");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

 /* responsive */
 const menu = document.getElementById("menu");
 const nav = document.querySelector(".nav-menu");

 menu.addEventListener("click",()=>{
  nav.classList.toggle("view");
  menu.classList.toggle("bx-x")
 })