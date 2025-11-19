const form = document.getElementById('loginForm');
const submitBtn = document.getElementById('submitBtn');

form.addEventListener('submit', login);

function login(event) {
    event.preventDefault();

    const emailElement = document.getElementById('email');
    const passwordElement = document.getElementById('password');

    const email = emailElement.value.trim();
    const password = passwordElement.value.trim();

    const emailError = document.getElementById('invalid-user');
    const passError = document.getElementById('invalid-pass');

    emailError.textContent = '';
    passError.textContent = '';

    
    if (!validateEmail(email)) {
        emailError.textContent = 'Please enter a valid email address';
        emailElement.focus();
        setTimeout(() => emailError.textContent = '', 3000);
        return;
    }

    if (email === '') {
        emailError.textContent = 'Email cannot be empty';
        emailElement.focus();
        setTimeout(() => emailError.textContent = '', 3000);
        return;
    }

    if (password === '') {
        passError.textContent = 'Password cannot be empty';
        passwordElement.focus();
        setTimeout(() => passError.textContent = '', 3000);
        return;
    }

    submitBtn.disabled = true;
    submitBtn.textContent = 'Logging in...';

    setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Login';
        alert('Login simulated - valid inputs. Implement server auth for real logins.');
        form.reset();
    }, 800);
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
