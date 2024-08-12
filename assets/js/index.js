---
layout: compress
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

const dest = (x) => {
	window.location = `../download/?q=${btoa(x.getAttribute('dest'))}`;
}
