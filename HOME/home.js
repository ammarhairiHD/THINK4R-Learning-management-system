const header = document.querySelector("header");

window.addEventListener("scroll", function() {
  header.classList.toggle("sticky", this.window.scrollY > 0);
});

let menu = document.querySelector('#menu-icon');
let nav = document.querySelector('.navbar');

menu.addEventListener('click', () => {
  menu.classList.toggle('bx-x');
  navbar.classList.toggle('open')
})

const cursorDot = document.querySelector("[data-cursor-dot]");
const cursorOutline = document.querySelector("[data-cursor-outline]");

window.addEventListener("mousemove", function (e) {

  const posX = e.clientX;
  const posY = e.clientY;

  cursorDot.style.left = `${posX}px`;
  cursorDot.style.top = `${posY}px`;

  //cursorOutline.style.left = `${posX}px`;
  //cursorOutline.style.top = `${posY}px`;

  cursorOutline.animate({
    left: `${posX}px`,
    top: `${posY}px`
  }, {duration: 500, fill: "forwards"});

});


