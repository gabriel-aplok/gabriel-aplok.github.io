adjust_textarea = (x) => {
	x.style.height = "20px";
	x.style.height = x.scrollHeight + "px";
}

odp = (x) => {
	window.location = `../download/?q=${btoa(x.getAttribute('odp'))}`
}

hamburgerMenu = () => {
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

footerDate = () => {
	document.querySelector(".date-y").innerText = new Date().getFullYear();
}

theme = () => {
	const toggleSwitch = document.querySelector(".theme-switch input[type='checkbox']");
	const currentTheme = localStorage.getItem("theme");

	if (currentTheme) {
		document.documentElement.setAttribute("data-theme", currentTheme);
		document.querySelector(".g-recaptcha").setAttribute("data-theme", currentTheme);

		if (currentTheme === "dark") {
			toggleSwitch.checked = true;
		}
	}

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

		theme();
	}, false);
};

cookieConsent = () => {
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

hamburgerMenu();
footerDate();
theme();
cookieConsent();
