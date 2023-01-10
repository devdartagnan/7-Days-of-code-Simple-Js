const getCadastrado = JSON.parse(localStorage.getItem('Cadastrado')) || []
const form = document.querySelector('.form')
const nome = document.querySelector('#name')
const nascimento = document.querySelector('#birth-date')
const email = document.querySelector('#email-reg')
const password = document.querySelector('#password-reg')

function setValues() {
    //take values, reverse date
    const values = [nome.value, nascimento.value]
    const ano = values[1].slice(0, 4)
    const mes = values[1].slice(5, 7)
    const dia = values[1].slice(-2)
    const data = `${dia}-${mes}-${ano}`
    let checkResult

    getCadastrado.filter((el) => {
        if (el.email === email.value) {
            return checkResult = true
        }
    })

    checkResult === true ? console.error('error') : setLocal(data)
}

form.addEventListener('submit', (e) => {
    e.preventDefault()
    setValues()

})

function setLocal(data) {
    //Set Values into obj
    stringLocal = {
        nome: nome.value,
        email: email.value,
        senha: password.value,
        data: data
    }

    getCadastrado === null ? stringLocal : getCadastrado.push(stringLocal)

    localStorage.setItem('Cadastrado', JSON.stringify(getCadastrado))

    setTimeout(() => {
        document.location = './index.html'
    }, 1000)
}