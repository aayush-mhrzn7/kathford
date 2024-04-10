/*  accordians */
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
 /* cursor */
/*  const cursor = document.getElementById("cursor");
 document.addEventListener("mousemove",(e)=>{
   cursor.setAttribute("style","top: "+(e.pageY-10)+"px; left: "+(e.pageX-10)+"px")})
   document.addEventListener("click",()=>{
    cursor.classList.add("expand");
    setTimeout(() => {
      cursor.classList.remove("expand");
    }, 500);
   }) */

   window.addEventListener('scroll', () => {
    document.body.style.setProperty('--scroll', window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
  }, false);