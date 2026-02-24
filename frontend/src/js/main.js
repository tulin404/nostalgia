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