const header = document.getElementById("header");

document.addEventListener("DOMContentLoaded", () => {
	const cookieConsent = document.querySelector(".cookie-consent");
	const cookieConsentButton = document.querySelector(".cookie-consent-button");

	if (localStorage.getItem("cookie-consent")) {
		cookieConsent.style.display = "none";
	} else {
		cookieConsent.style.display = "block";
	}

	cookieConsentButton.addEventListener("click", () => {
		localStorage.setItem("cookie-consent", true);
		cookieConsent.style.display = "none";
	});
});

function headerMenu() {
	header.classList.toggle("open");
}
