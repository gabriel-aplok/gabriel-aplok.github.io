// Firebase imports
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.9.0/firebase-analytics.js";

// Firebase configuration and initialization
const firebaseConfig = {
  apiKey: "AIzaSyCkjLnWOgkjMqfZcedbCo_8dj7F5nEIPCM",
  authDomain: "gabriel-aplok-46172.firebaseapp.com",
  projectId: "gabriel-aplok-46172",
  storageBucket: "gabriel-aplok-46172.appspot.com",
  messagingSenderId: "1052791408123",
  appId: "1:1052791408123:web:76d2717044c7483bb4b75e",
  measurementId: "G-FJD9RTYZP5",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Utility: Redirect to download with encoded query
function redirectToDownload(element) {
  const dest = element.getAttribute("dest");
  if (dest) {
    window.location = `../../download/?q=${btoa(dest)}`;
  }
}

// Theme management
const THEME_KEY = "bs-theme";
const THEME_MODES = ["light", "dark", "system"];

function getSystemTheme() {
  return window.matchMedia("(prefers-color-scheme: light)").matches
    ? "light"
    : "dark";
}

function applyTheme(mode) {
  document.documentElement.setAttribute("data-bs-theme", mode);
  document
    .querySelectorAll(".mode-switch .btn")
    .forEach((btn) => btn.classList.remove("text-body"));
  const activeBtn = document.getElementById(mode);
  if (activeBtn) activeBtn.classList.add("text-body");
}

function setTheme(mode = "dark") {
  let userMode = localStorage.getItem(THEME_KEY);
  const isSystem = mode === "system" || (!userMode && mode === "auto");
  let finalMode = isSystem
    ? getSystemTheme()
    : THEME_MODES.includes(mode)
      ? mode
      : userMode || "dark";

  if (isSystem) {
    localStorage.removeItem(THEME_KEY);
  } else {
    localStorage.setItem(THEME_KEY, finalMode);
  }
  applyTheme(finalMode);
}

document.getElementById("mailButton").addEventListener("click", function (e) {
  e.preventDefault();
  const email = ["service", "trenbankai.com"];
  const full = `${email[0]}@${email[1]}`;
  window.location.href = `mailto:${full}?subject=Hey Gabriel&body=Hi!`;
});

// Optional: Uncomment to enable theme switching
// setTheme("light");
// document.querySelectorAll(".mode-switch .btn").forEach(btn => btn.addEventListener("click", () => setTheme(btn.id)));
// window.matchMedia("(prefers-color-scheme: light)").addEventListener("change", () => setTheme());

// alert("JavaScript loaded successfully!");
