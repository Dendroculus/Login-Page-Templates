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
        setTimeout(() => userError.textContent = '', 3000);
        return;
    }
    if (username.length < 3) {
        userError.textContent = 'Username must be at least 3 characters';
        usernameEl.focus();
        setTimeout(() => userError.textContent = '', 3000);
        return;
    }

    if (password === '') {
        passError.textContent = 'Password cannot be empty';
        passwordEl.focus();
        setTimeout(() => passError.textContent = '', 3000);
        return;
    }
    if (password.length < 8) {
        passError.textContent = 'Password must be at least 8 characters';
        passwordEl.focus();
        setTimeout(() => passError.textContent = '', 3000);
        return;
    }
    if (!validatePassword(password)) {
        passError.textContent = 'Password must include uppercase, lowercase, a number, and a special character';
        passwordEl.focus();
        setTimeout(() => passError.textContent = '', 3000);
        return;
    }
    if (username === password) {
        sameUserPw.textContent = 'Username and password should not be the same';
        passwordEl.focus();
        setTimeout(() => sameUserPw.textContent = '', 3000);
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

function validatePassword(password) {
    const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{8,}$/;
    return re.test(password);
}
