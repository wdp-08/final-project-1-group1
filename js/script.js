// Index.html
let searchBtn = document.querySelector("#search-btn");
let searchBar = document.querySelector(".search-bar-container");
let formBtn = document.querySelector("#login-btn");
let loginForm = document.querySelector(".login-form-container");
let formClose = document.querySelector("#form-close");
let menu = document.querySelector("#menu-bar");
let navbar = document.querySelector(".navbar");
let fotoBtn = document.querySelector(".btn");

window.onscroll = () => {
  searchBtn.classList.remove("fa-times");
  searchBar.classList.remove("active");
  menu.classList.remove("fa-times");
  navbar.classList.remove("active");
  loginForm.classList.remove("active");
};

menu.addEventListener("click", () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
});

searchBtn.addEventListener("click", () => {
  searchBtn.classList.toggle("fa-times");
  searchBar.classList.toggle("active");
});

formBtn.addEventListener("click", () => {
  loginForm.classList.add("active");
});

formClose.addEventListener("click", () => {
  loginForm.classList.remove("active");
});

fotoBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelector(".content .active").classList.remove("active");
    btn.classList.remove("active");
  });
});

// Button terimakasih sudah berbelanja
function myFunction() {
  alert("Terima kasih telah Berbelanja website kami!");
}
// Maps Contact
function initMap() {
  var location = { lat: -6.2146, lng: 106.8451 };
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: location,
  });
  var marker = new google.maps.Marker({
    position: location,
    map: map,
  });
}
