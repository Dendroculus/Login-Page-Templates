const container = document.querySelector('.container');
const LoginLink   = document.querySelector('.SignInLink');
const RegisterLink = document.querySelector('.SignUpLink');

RegisterLink.addEventListener('click', e => {
    e.preventDefault();
    container.classList.add('active');
});
LoginLink.addEventListener('click', e => {
    e.preventDefault();
    container.classList.remove('active');
});