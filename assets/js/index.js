---
layout: null
---

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";

const firebaseConfig = {
	apiKey: "AIzaSyCkjLnWOgkjMqfZcedbCo_8dj7F5nEIPCM",
	authDomain: "gabriel-aplok-46172.firebaseapp.com",
	projectId: "gabriel-aplok-46172",
	storageBucket: "gabriel-aplok-46172.appspot.com",
	messagingSenderId: "1052791408123",
	appId: "1:1052791408123:web:76d2717044c7483bb4b75e",
	measurementId: "G-FJD9RTYZP5"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Testing
const dest = (x) => {
	alert(x);
	window.location = `../download/?q=${btoa(x.getAttribute('dest'))}`;
}

// Input Sizing
const adjust_textarea = (x) => {
	x.style.height = "20px";
	x.style.height = x.scrollHeight + "px";
}

// Hamburger menu
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link");

hamburger.addEventListener("click", () => {
	hamburger.classList.toggle("active");
	navMenu.classList.toggle("active");
});

navLink.forEach((node) => node.addEventListener("click", () => {
	hamburger.classList.remove("active");
	navMenu.classList.remove("active");
}));

// Theme switching
const toggleSwitch = document.querySelector(".theme-switch input[type='checkbox']");
const currentTheme = localStorage.getItem("theme");

document.documentElement.setAttribute("data-theme", currentTheme);
document.querySelector(".g-recaptcha").setAttribute("data-theme", currentTheme);
toggleSwitch.checked = (currentTheme == "dark");

toggleSwitch.addEventListener("change", (event) => {
	if (event.target.checked) {
		document.documentElement.setAttribute("data-theme", "dark");
		document.querySelector(".g-recaptcha").setAttribute("data-theme", "dark");
		localStorage.setItem("theme", "dark");
	} else {
		document.documentElement.setAttribute("data-theme", "light");
		document.querySelector(".g-recaptcha").setAttribute("data-theme", "light");
		localStorage.setItem("theme", "light");
	}
});
