// get html elements
const emailInput = document.querySelector('#email');
const emailSuffix = document.querySelector('#emailSuffix');
const passwordInput = document.querySelector('#password');
const passwordSuffix = document.querySelector('.pwd-btn');
const loginButton = document.querySelector('.login-btn');

const emailRegex = /[^@]*@stud\.noroff\.no/g;

function emailChecker() {
	// execute regular expression on email input value
	let match = emailRegex.exec(emailInput.value);

	// if match === true
	if (match) {
		emailSuffix.className = 'nf nf-fa-check';
		emailSuffix.style.color = 'var(--color-green)';
	} else {
		emailSuffix.className = 'nf nf-fa-close';
		emailSuffix.style.color = 'var(--color-red)';
	}
}
emailInput.addEventListener('change', () => emailChecker()); // listen for changes on email input

function togglePasswordVisibility() {
	if (passwordInput.type === 'password') {
		passwordInput.type = 'text';
	} else {
		passwordInput.type = 'password';
	}
}
passwordSuffix.addEventListener('click', () => togglePasswordVisibility()); // run toggle function on button click

async function submitForm() {
	let emailMatch = emailRegex.exec(emailInput.value);

	if (!emailMatch) {
		console.error('Email is not valid!');
	}

	if (passwordInput.length < 8) {
		console.error('Password is too short!');
	}

	const data = {
		email: emailInput.value,
		password: passwordInput.value,
	};

	const response = await fetch(url, {
		method: "POST", // *GET, POST, PUT, DELETE, etc.
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(data), // body data type must match "Content-Type" header
	});
	const responseData = response.json(); // parses JSON response into native JavaScript objects

	console.log(responseData);
}
loginButton.addEventListener('click', () => submitForm());





// extra dings for cool peeps

passwordInput.addEventListener('keydown', (event) => {
	let key = event.key;

	if (key === 'Enter') {
		submitForm();
	}
});
