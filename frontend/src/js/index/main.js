const createAccBtn = document.getElementById('create-acc');
const loading = document.getElementById('loading');
const usernameInput = document.getElementById('username_i');
const emailInput = document.getElementById('email_i');
const pwdInput = document.getElementById('pwd_i');

createAccBtn.addEventListener('click', () => {
    try {
        fetch(`${import.meta.env.VITE_API_URL}/auth/register`, {
            mehtod: POST,
            headers: {
                "Content-Type": "application/json"
            },
            body: {
                username: usernameInput.value,
                email: emailInput.value,
                password: pwdInput.value
            }
        });
    } catch(error) {
        console.log(`Erro no frontend: ${error}`);
    } finally {

    };
});