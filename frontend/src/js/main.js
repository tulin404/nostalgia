const emailInput = document.querySelector('#email-input');
const emailTxt = document.querySelector('#email-txt');
const pwdInput = document.querySelector('#pwd-input');
const pwdTxt = document.querySelector('#pwd-txt');

emailInput.addEventListener('input', () => {
    if (emailInput.value.length > 0) {
        emailTxt.classList.add('hidden');
    } else {
        emailTxt.classList.remove('hidden');
    };
});

pwdInput.addEventListener('input', () => {
    if (pwdInput.value.length > 0) {
        pwdTxt.classList.add('hidden');
    } else {
        pwdTxt.classList.remove('hidden');
    };
});

const registerWrapper = document.getElementById('register-full-wrapper');
const loginWrapper = document.getElementById('login-full-wrapper');
const forgotWrapper = document.getElementById('forgot-full-wrapper');

window.addEventListener('load', () => {
    registerWrapper.inert = true;
    forgotWrapper.inert = true;
});

window.addEventListener('click', (e) => {
    if (e.target.classList.contains('enter')) {
        const nearWrapper = e.target.closest('.full-wrapper');
        nearWrapper.classList.add('scale-0');
        nearWrapper.inert = true;
        loginWrapper.classList.remove('scale-0');
        loginWrapper.inert = false;
    };

    if (e.target.classList.contains('change-pwd')) {
        const nearWrapper = e.target.closest('.full-wrapper');
        nearWrapper.classList.add('scale-0');
        nearWrapper.inert = true;
        forgotWrapper.classList.remove('scale-0');
        forgotWrapper.inert = false;
    };

    if (e.target.classList.contains('register')) {
        const nearWrapper = e.target.closest('.full-wrapper');
        nearWrapper.classList.add('scale-0');
        nearWrapper.inert = true;
        registerWrapper.classList.remove('scale-0');
        registerWrapper.inert = false;
    };
});