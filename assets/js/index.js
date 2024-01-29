adjust_textarea = (x) => {
	x.style.height = "20px";
	x.style.height = x.scrollHeight + "px";
}

c2a1286e0b3e40cc951eaa1628b855e3 = () => {
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
}

cecf6b784ae54e0ab07b6441b4f8b304 = () => {
	document.querySelector(".date-y").innerText = new Date().getFullYear();
}

f3dcf5c99cbf47b2a5b29416d3f184fe = () => {
	const toggleSwitch = document.querySelector(".theme-switch input[type='checkbox']");
	const currentTheme = localStorage.getItem("theme");

	if (currentTheme) {
		document.documentElement.setAttribute("data-theme", currentTheme);
		document.querySelector(".g-recaptcha").setAttribute("data-theme", currentTheme);

		if (currentTheme === "dark") {
			toggleSwitch.checked = true;
		}
	}

	switchTheme = (event) => {
		if (event.target.checked) {
			document.documentElement.setAttribute("data-theme", "dark");
			document.querySelector(".g-recaptcha").setAttribute("data-theme", "dark");
			localStorage.setItem("theme", "dark");
		} else {
			document.documentElement.setAttribute("data-theme", "light");
			document.querySelector(".g-recaptcha").setAttribute("data-theme", "light");
			localStorage.setItem("theme", "light");
		}
	}

	toggleSwitch.addEventListener("change", switchTheme, false);
};

f9107e43c7d0479fa44588c8b4915eda = () => {
	document.addEventListener("DOMContentLoaded", () => {
		const cookieConsent = document.querySelector(".cookie-consent");
		const cookieConsentAccept = document.querySelector(".cookie-consent-accept");

		if (localStorage.getItem("cookie-consent")) {
			cookieConsent.style.display = "none";
		} else {
			cookieConsent.style.display = "block";
		}

		cookieConsent.onclick = (event) => {
			event.preventDefault();
		};

		cookieConsentAccept.onclick = (event) => {
			localStorage.setItem("cookie-consent", true);
			cookieConsent.style.display = "none";
		};
	});
};

c2a1286e0b3e40cc951eaa1628b855e3();
cecf6b784ae54e0ab07b6441b4f8b304();
f3dcf5c99cbf47b2a5b29416d3f184fe();
f9107e43c7d0479fa44588c8b4915eda();
