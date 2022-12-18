function theme() {
	if (window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches) {
		document.body.classList.add("light-theme");
	}
}

function footer() {
	const currentYear = document.getElementById("current-year");

	currentYear.innerText = new Date().getFullYear();
}

theme();
footer();
