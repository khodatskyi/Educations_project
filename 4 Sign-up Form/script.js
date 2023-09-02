const password = document.getElementById("password")
const passwordConfirm = document.getElementById("password-confirm")
const PasswordMismatch = document.getElementById("Password-mismatch")
const imgInfo = document.getElementById('img-info');
const paragraphRules = document.getElementById('password-rules')
const upperLetter = document.getElementById('upper-letter')
const number = document.getElementById('number')

function hasUppercase(password) {
    return /[A-Z]/.test(password);
  }
function hasNumber(password) {
    return /[0-9]/.test(password);
  }

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

imgInfo.addEventListener('mouseenter', (e) => {
    paragraphRules.classList.remove('hidden')
    paragraphRules.classList.add('password-rules')
    if (hasUppercase(password.value)) {
        upperLetter.classList.add('correct')
    } else upperLetter.classList.remove('correct')
    if (hasNumber(password.value)) {
        number.classList.add('correct')
    } else number.classList.remove('correct')
});

imgInfo.addEventListener('mouseleave', () => {
    paragraphRules.classList.add('hidden')
    paragraphRules.classList.remove('password-rules')
  });
