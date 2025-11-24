const regisForm = document.getElementById('registerform');
const regisSubmitBtn = document.getElementById('register-btn');

const registerInputs = document.querySelectorAll('.register input[required]');
registerInputs.forEach(input => {
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

regisForm.addEventListener('submit', register);

function register(event) {
    event.preventDefault();

    const nameElement = document.getElementById('register-username');
    const passwordElement = document.getElementById('register-password');
    const emailElement = document.getElementById('register-email');

    const fullname = nameElement.value.trim();
    const password = passwordElement.value.trim();
    const email = emailElement.value.trim()

    const userError = document.getElementById('invalid-register-username');
    const passError = document.getElementById('invalid-register-password');
    const emailError = document.getElementById('invalid-register-email');    
    const sameUserPw = document.getElementById('same-user-pw');

    userError.textContent = '';
    passError.textContent = '';
    emailError.textContent = '';
    sameUserPw.textContent = '';


    if (!validateEmail(email)) {
        emailError.textContent = 'Please enter a valid email address';
        emailElement.focus();
        setTimeout(() => emailError.textContent = '', 3000);
        return;
    }

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


    if (password === '') {
        passError.textContent = 'Password cannot be empty';
        passwordElement.focus();
        setTimeout(() => passError.textContent = '', 3000);
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

    regisSubmitBtn.disabled = true;
    regisSubmitBtn.textContent = 'Registering...';

    setTimeout(() => {
        regisSubmitBtn.disabled = false;
        regisSubmitBtn.textContent = 'Register';
        alert('Register simulated - valid inputs. Implement server auth for real logins.');
        regisForm.reset();
        
        registerInputs.forEach(input => {
            input.classList.remove('has-value');
        });
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