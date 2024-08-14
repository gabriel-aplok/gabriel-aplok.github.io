import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-analytics.js";

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

const dest = (x) => {
	window.location = `../download/?q=${btoa(x.getAttribute('dest'))}`;
};

const setTheme = (mode = "dark") => {
	const userMode = localStorage.getItem("bs-theme");
	const sysMode = window.matchMedia("(prefers-color-scheme: light)").matches;
	const useSystem = mode === "system" || (!userMode && mode === "auto");
	const modeChosen = useSystem ? "system" : mode === "dark" || mode === "light" ? mode : userMode;

	if (useSystem) {
		localStorage.removeItem("bs-theme");
	} else {
		localStorage.setItem("bs-theme", modeChosen);
	}

	document.documentElement.setAttribute("data-bs-theme", useSystem ? (sysMode ? "light" : "dark") : modeChosen);
	document.querySelectorAll(".mode-switch .btn").forEach(e => e.classList.remove("text-body"));
	document.getElementById(modeChosen).classList.add("text-body");
};

// setTheme("dark");
// document.querySelectorAll(".mode-switch .btn").forEach(e => e.addEventListener("click", () => setTheme(e.id)));
// window.matchMedia("(prefers-color-scheme: light)").addEventListener("change", () => setTheme());
