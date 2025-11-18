const form = document.getElementById('loginForm');
const submitBtn = document.getElementById('submitBtn');

form.addEventListener('submit', login);

function login(event) {
    event.preventDefault();

    const usernameEl = document.getElementById('username');
    const passwordEl = document.getElementById('password');

    const username = usernameEl.value.trim();
    const password = passwordEl.value.trim();

    const userError = document.getElementById('invalid-user');
    const passError = document.getElementById('invalid-pass');
    const sameUserPw = document.getElementById('same-user-pw');

    userError.textContent = '';
    passError.textContent = '';
    sameUserPw.textContent = '';

    if (username === '') {
        userError.textContent = 'Username cannot be empty';
        usernameEl.focus();
        return;
    }
    if (username.length < 3) {
        userError.textContent = 'Username must be at least 3 characters';
        usernameEl.focus();
        return;
    }

    if (password === '') {
        passError.textContent = 'Password cannot be empty';
        passwordEl.focus();
        return;
    }

    if (password.length < 8) {
        passError.textContent = 'Password must be at least 8 characters';
        passwordEl.focus();
        return;
    }

    if (!validatePassword(password)) {
        passError.textContent =
            'Password must include uppercase, lowercase, a number, and a special character';
        passwordEl.focus();
        return;
    }

    if (username === password) {
        sameUserPw.textContent = 'Username and password should not be the same';
        passwordEl.focus();
        return;
    }

    submitBtn.disabled = true;
    submitBtn.textContent = 'Logging in...';

    // NOTE: Do not actually send credentials in client-only demo.
    // In a real app you would POST to the server over HTTPS here.
    setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Login';
        alert('Login simulated - valid inputs. Implement server auth for real logins.');
        form.reset();
    }, 800);
}

function validatePassword(password) {
    const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{8,}$/;
    return re.test(password);
}