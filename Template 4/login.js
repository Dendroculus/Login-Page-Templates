const loginForm = document.getElementById('loginform');
const loginSubmitBtn = document.getElementById('login-btn');

const loginInputs = document.querySelectorAll('.login input[required]');
loginInputs.forEach(input => {
    input.addEventListener('blur', function() {
        if (this.value.trim() !== '') {
            this.classList.add('has-value');
        } else {
            this.classList.remove('has-value');
        }
    });
    
    input.addEventListener('input', function() {
        if (this.value.trim() !== '') {
            this.classList.add('has-value');
        } else {
            this.classList.remove('has-value');
        }
    });
});

loginForm.addEventListener('submit', login);

function login(event) {
    event.preventDefault();

    const usernameElement = document.getElementById('login-username');
    const passwordElement = document.getElementById('login-password');

    const username = usernameElement.value.trim();
    const password = passwordElement.value.trim();

    const userError = document.getElementById('invalid-login-username');
    const passError = document.getElementById('invalid-login-password');

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

    loginSubmitBtn.disabled = true;
    loginSubmitBtn.textContent = 'Logging in...';

    setTimeout(() => {
        loginSubmitBtn.disabled = false;
        loginSubmitBtn.textContent = 'Login';
        alert('Login simulated - valid inputs. Implement server auth for real logins.');
        loginForm.reset();
        
        loginInputs.forEach(input => {
            input.classList.remove('has-value');
        });
    }, 800);
}