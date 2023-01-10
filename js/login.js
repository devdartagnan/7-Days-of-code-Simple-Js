const getLocal = JSON.parse(localStorage.getItem('Cadastrado'))
const form = document.querySelector('.form')
const nome = document.querySelector('#name')
const password = document.querySelector('#password')
const email = document.querySelector('#email-reg')

function checkLogin() {
    const result = getLocal.find((element) => {
        if (element.senha === password.value) {
            if (element.email === email.value) {
                return true
            }
        }
    });

    if (result) {
        localStorage.setItem('logged', JSON.stringify(result))
        setTimeout(() => {
            document.location = './logged.html'
        }, 500)
    } else {
        console.error('No matches')
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault()
    checkLogin()
})