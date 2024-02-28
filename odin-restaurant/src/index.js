import loadHome from "./home.js";
import loadMenu from "./menu.js";
import loadAbout from "./about.js";

const contentElement = document.getElementById("content");

document.addEventListener("DOMContentLoaded", contentElement.appendChild(loadHome()));

document.addEventListener("click", (e) => {
  e.preventDefault();

  if (e.target.getAttribute(`meta-section`) === "home") {
    contentElement.innerHTML = "";
    contentElement.appendChild(loadHome());
  }

  if (e.target.getAttribute(`meta-section`) === "menu") {
    contentElement.innerHTML = "";
    contentElement.appendChild(loadMenu());
  }

  if (e.target.getAttribute(`meta-section`) === "about") {
    contentElement.innerHTML = "";
    contentElement.appendChild(loadAbout());
  }
});
