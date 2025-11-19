const form = document.getElementById('loginForm');
const submitBtn = document.getElementById('submitBtn');

form.addEventListener('submit', register);

function register(event) {
    event.preventDefault();

    const nameElement = document.getElementById('username');
    const passwordElement = document.getElementById('password');
    const emailElement = document.getElementById('email');
    const confirmPasswordElement = document.getElementById('reg-confirm');

    const fullname = nameElement.value.trim();
    const password = passwordElement.value.trim();
    const email = emailElement.value.trim()
    const confirmPassword = confirmPasswordElement.value.trim();

    const userError = document.getElementById('invalid-user');
    const passError = document.getElementById('invalid-pass');
    const emailError = document.getElementById('invalid-email');    
    const sameUserPw = document.getElementById('same-user-pw');
    const confirmPassError = document.getElementById('invalid-confirm-pass');

    userError.textContent = '';
    passError.textContent = '';
    emailError.textContent = '';
    sameUserPw.textContent = '';
    confirmPassError.textContent = '';

    if (fullname === '') {
        userError.textContent = 'Username cannot be empty';
        nameElement.focus();
        setTimeout(() => userError.textContent = '', 3000);
        return;
    }
    if (fullname.length < 3) {
        userError.textContent = 'Username must be at least 3 characters';
        nameElement.focus();
        setTimeout(() => userError.textContent = '', 3000);
        return;
    }


    if (!validateEmail(email)) {
        emailError.textContent = 'Please enter a valid email address';
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

    if (password !== confirmPassword) {
        confirmPassError.textContent = 'Passwords do not match';
        confirmPasswordElement.focus();
        setTimeout(() => confirmPassError.textContent = '', 3000);
        return;
    }

    if (password.length < 8) {
        passError.textContent = 'Password must be at least 8 characters';
        passwordElement.focus();
        setTimeout(() => passError.textContent = '', 3000);
        return;
    }

    if (!validatePassword(password)) {
        passError.textContent =
            'Password must include uppercase, lowercase, a number, and a special character';
        passwordElement.focus();
        setTimeout(() => passError.textContent = '', 3000);
        return;
    }

    if (fullname === password) {
        sameUserPw.textContent = 'Username and password should not be the same';
        passwordElement.focus();
        setTimeout(() => sameUserPw.textContent = '', 3000);
        return;
    }

    submitBtn.disabled = true;
    submitBtn.textContent = 'Logging in...';

    // NOTE: Do not actually send credentials in client-only demo.
    // In a real app you would POST to the server over HTTPS here.
    setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Login';
        alert('Register simulated - valid inputs. Implement server auth for real logins.');
        form.reset();   
    }, 800);
}

function validatePassword(password) {
    const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{8,}$/;
    return re.test(password);
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}