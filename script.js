 /* =========================================
   SCRIPT WEBSITE UNIVERSITAS
========================================= */

// ===============================
// DARK MODE
// ===============================

const tombolDark = document.querySelector(".tombol-dark");
const body = document.body;

tombolDark.addEventListener("click", () => {

body.classList.toggle("dark-mode");

if(body.classList.contains("dark-mode")){
tombolDark.textContent = "☀ Light Mode";
}else{
tombolDark.textContent = "🌙 Dark Mode";
}

});


// ===============================
// NAVBAR SCROLL EFFECT
// ===============================

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {

if(window.scrollY > 50){
navbar.style.background = "#004d2b";
}else{
navbar.style.background = "#006B3C";
}

});


// ===============================
// ANIMASI ANGKA STATISTIK
// ===============================

const counters = document.querySelectorAll(".stat-angka");

counters.forEach(counter => {

counter.innerText = "0";

const updateCounter = () => {

const target = +counter.getAttribute("data-target");

const c = +counter.innerText;

const increment = target / 100;

if(c < target){
counter.innerText = `${Math.ceil(c + increment)}`;
setTimeout(updateCounter, 30);
}else{
counter.innerText = target;
}

};

updateCounter();

});