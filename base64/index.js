function encodeText() {
	const inputText = document.getElementById('inputText')
		.value;
	const encodedText = btoa(inputText);
	document.getElementById('outputText')
		.value = encodedText;
}

function decodeText() {
	const inputText = document.getElementById('inputText')
		.value;
	const decodedText = atob(inputText);
	document.getElementById('outputText')
		.value = decodedText;
}

function clearText() {
	document.getElementById('inputText')
		.value = '';
	document.getElementById('outputText')
		.value = '';
}

function checkSuspicious() {
	const suspiciousChars = ['<', '>', '&', '"', '\'', '`', '=', '*', '\\'];
	const inputText = document.getElementById('inputSuspicious')
		.value;
	const result = suspiciousChars.some(char => inputText.includes(char));
	const resultDisplay = document.getElementById('suspiciousResult');
	resultDisplay.textContent = result ? 'Suspicious characters found!' : 'No suspicious characters found.';
}