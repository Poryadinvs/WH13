const password1 = document.querySelector('#pass1')
const password2 = document.querySelector('#pass2')
const error = document.querySelector('.error')

const check = () => {
    const pas1 = password1.value
    const pas2 = password2.value
    const speChar = ['!@#$%^&*()-_=+']
    error.textContent = ' '
    if (pas1 < 8) {
        error.textContent += 'Пароль должен быть больше 8 символов\n'
    }
    if (pas1 !== pas2) {
        error.textContent += 'Пароли не совпадают\n'
    }
    if (!/[A-Z]/.test(pas1)) {
        error.textContent += 'Пароль болжен содержать верхний регистр\n'
    }
    if (!/[a-z]/.test(pas1)) {
        error.textContent += 'Пароль болжен содержать верхний регистр\n'
    }
    if(!speChar.test(pas1)){
        error.textContent += 'Пароль должен содержать специальные символы'
    }
}

password1.addEventListener('change', check)
password2.addEventListener('change', check)

// 12SVS2fh*