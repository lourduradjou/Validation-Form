const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password1 = document.getElementById('password1');
const password2 = document.getElementById('password2');

// Add input event listeners to trigger validation as the user types
username.addEventListener('input', () => {
	checkUsername();
});

email.addEventListener('input', () => {
	checkEmail();
});

password1.addEventListener('input', () => {
	checkPassword1();
});

password2.addEventListener('input', () => {
	checkPassword2();
});

form.addEventListener('submit', (event) => {
	event.preventDefault();
	// Function call to check inputs on form submission
	checkInput();
});

function checkInput() {
	// Validate all inputs on form submission
	checkUsername();
	checkEmail();
	checkPassword1();
	checkPassword2();
}

function checkUsername() {
	const userNameValue = username.value.trim();
	if (userNameValue === '') {
		setError(username, "Username Can't Be Blank");
	} else {
		setSuccess(username);
	}
}

function checkEmail() {
	const emailValue = email.value.trim();
	if (emailValue === '') {
		setError(email, "Email Can't Be Blank");
	} else if (!isValidEmail(emailValue)) {
		setError(email, 'Not a Valid Email');
	} else {
		setSuccess(email);
	}
}

function checkPassword1() {
	const password1Value = password1.value.trim();
	if (password1Value === '') {
		setError(password1, "Password Can't Be Blank");
	} else {
		setSuccess(password1);
	}
}

function checkPassword2() {
	const password1Value = password1.value.trim();
	const password2Value = password2.value.trim();
	if (password2Value === '') {
		setError(password2, "Password Can't Be Blank");
	} else if (password2Value !== password1Value) {
		setError(password2, "Password doesn't match");
	} else {
		setSuccess(password2);
	}
}

function isValidEmail(email) {
	// Your email validation regex remains unchanged
	return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
		email
	);
}

// setError function declaration to give small error message below the input box
function setError(input, message) {
	const formControl = input.parentElement;
	formControl.className = 'inside-form error';
	const small = formControl.querySelector('small');
	small.innerText = message;
}

function setSuccess(input) {
	const formControl = input.parentElement;
	formControl.className = 'inside-form success';
}
