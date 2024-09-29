
const navbars = document.querySelectorAll(".navbar li a");
function hover(){
    this.classList.add("hhome");
    console.log(this.classList);
}
function out(){
    this.classList.remove("hhome");
    console.log(this.classList);
}
navbars.forEach(navbar => navbar.addEventListener("mouseover",hover));
navbars.forEach(navbar => navbar.addEventListener("mouseout",out));



const menu = document.querySelector(".menu");
const navbar = document.querySelector(".navbar");
const close =document.querySelector(".close");
menu.addEventListener("click",() => {
    navbar.classList.add("show");
});
menu.addEventListener("mouseover",hover);
menu.addEventListener("mouseout",out);

close.addEventListener("click",() => {
    navbar.classList.remove("show")
})

const icons = document.querySelectorAll(".icon i");

function toggleSize(event) {
    this.classList.toggle("fa-6x", event.type === "mouseover");
    console.log(this.classList);
}

icons.forEach(icon => {
    icon.addEventListener("mouseover", toggleSize);
    icon.addEventListener("mouseout", toggleSize);
});
const services = document.querySelectorAll(".service");
let currentIndex = 0;
const Dim_lights = document.querySelectorAll(".service h2");
let intervalId = setInterval(add_color, 500); // Call add_color every 500ms

function add_color() {
  Dim_lights.forEach(h2 => {
    h2.classList.remove("color");
  });
  Dim_lights[currentIndex].classList.add("color");
}

function openTab(index){
  services.forEach(service => service.classList.remove("active"))

  services[index].classList.add("active")
}
function sweep(){

  currentIndex ++;
  if (currentIndex >= services.length){
    currentIndex = 0
  };
  openTab(currentIndex);
  add_color();
}
setInterval(sweep,3500);
openTab(currentIndex);

document.addEventListener('DOMContentLoaded', function() {
  const faders = document.querySelectorAll('.fade-in-section');

  const appearOptions = {
    threshold: 0.2,  
    rootMargin: "0px 0px -50px 0px"  
  };

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        return;
      } else {
        entry.target.classList.add('visible');  
        appearOnScroll.unobserve(entry.target);
      }
    });
  }, appearOptions);

  faders.forEach(fader => {
    appearOnScroll.observe(fader);  
  });
});

