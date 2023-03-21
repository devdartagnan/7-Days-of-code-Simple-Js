const getLocal = JSON.parse(localStorage.getItem('Cadastrado')) || []
const form = document.querySelector('.form')
const nome = document.querySelector('#name')
const password = document.querySelector('#password')
const email = document.querySelector('#email-reg')

function checkLogin() {
    let emailCheck = true
    let emailCheckNone = true

    const result = getLocal.find((element) => {
        if (element.email === email.value) {
            emailCheck = false
            if (element.senha === password.value) {
                return true
            } else {
                alert('Your password is wrong')
            }
        }else{
                emailCheckNone = true
        }
    });
    
    checkValidity(result, emailCheck, emailCheckNone)
}

form.addEventListener('submit', (e) => {
    e.preventDefault()
    checkLogin()
})

function checkValidity(result, emailCheck, emailCheckNone){
    if (result) {
        localStorage.setItem('logged', JSON.stringify(result))
        setTimeout(() => {
            document.location = './logged.html'
        }, 500)
    } if (emailCheck && emailCheckNone) {
        alert('There is no matches for that email')
    }
}