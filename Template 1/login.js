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

    if (password === '') {
        passError.textContent = 'Password cannot be empty';
        passwordEl.focus();
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

function validatePassword(password) {
    const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{8,}$/;
    return re.test(password);
}
