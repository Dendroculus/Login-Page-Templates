const form = document.getElementById('loginform');
const submitBtn = document.getElementById('login-btn');

form.addEventListener('submit', login);

function login(event) {
    event.preventDefault();

    const usernameElement = document.getElementById('username');
    const passwordElement = document.getElementById('password');

    const username = usernameElement.value.trim();
    const password = passwordElement.value.trim();

    const userError = document.getElementById('invalid-user');
    const passError = document.getElementById('invalid-pass');

    userError.textContent = '';
    passError.textContent = '';

    if (username === '') {
        userError.textContent = 'Username cannot be empty';
        usernameElement.focus();
        setTimeout(() => userError.textContent = '', 3000);
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


