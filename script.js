// get html elements
const emailInput = document.querySelector('#email');
const emailSuffix = document.querySelector('#emailSuffix');
const passwordInput = document.querySelector('#password');
const passwordSuffix = document.querySelector('.pwd-btn');
const loginButton = document.querySelector('.login-btn');

const emailRegex = /[^@]*@test\.no/g;

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

function submitForm() {
	const data = {
		email: emailInput.value,
		password: passwordInput.value,
	};

	console.log(data);
}
loginButton.addEventListener('click', () => submitForm());





// extra dings for cool peeps

passwordInput.addEventListener('keydown', (event) => {
	let key = event.key;

	if (key === 'Enter') {
		submitForm();
	}
});
