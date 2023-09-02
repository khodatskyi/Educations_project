const password = document.getElementById("password")
const passwordConfirm = document.getElementById("password-confirm")
const PasswordMismatch = document.getElementById("Password-mismatch")

passwordConfirm.addEventListener('input', (e) => {

    if(password.value == passwordConfirm.value) {
        PasswordMismatch.classList.remove('incorrect')
        PasswordMismatch.classList.add('correct')
        PasswordMismatch.textContent = "Passwords indentical!"

    } else {
        PasswordMismatch.classList.remove('correct')
        PasswordMismatch.classList.add('incorrect')
        PasswordMismatch.textContent = "Incorrect passwords!"
    }
})
