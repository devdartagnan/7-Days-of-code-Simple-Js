const loggedGet = JSON.parse(localStorage.getItem('logged'))
const cadastradoGet = JSON.parse(localStorage.getItem('Cadastrado'))
const form = document.querySelector('.form')
const deslogar = document.querySelector('#deslogar')
const profile = document.querySelector('.log')
const nomeItem = document.getElementById('nomeItem')
const emailItem = document.getElementById('emailItem')
const iconEditNome = document.getElementById('iconEditNome')
const iconEditEmail = document.getElementById('iconEditEmail')
const oldPass = document.querySelector('#oldPass')
const newPass = document.querySelector('#newPass')
const redoBtn = document.querySelector('#redoPasswordBtn')

const loggedNome = loggedGet.nome
const loggedEmail = loggedGet.email
const loggedPass = loggedGet.senha

function cadastradoMap (key){
    return cadastradoGet.map((obj) => {
        return obj[key] === loggedEmail ? obj[key] : void(0)
    })
}
if (loggedGet !== null) {
    nomeItem.innerText = `Nome: ${loggedNome}`
    emailItem.innerText = `Email: ${loggedEmail}`
}

form.addEventListener('submit', (e) => {
    e.preventDefault()
    rePasswordLocal()
})

deslogar.addEventListener('click', () => {
    localStorage.removeItem('logged')
    document.location = './index.html'
})
iconEditNome.addEventListener('click', () => {
    updateLocal(loggedNome, nomeItem, 'nome')
})
iconEditEmail.addEventListener('click', () => {
    updateLocal(loggedEmail, emailItem, 'email')
})

redoBtn.addEventListener('click', () => {
    form.classList.toggle('display-none')
})

function updateLocal(input, element, tag) {
    let arr;
    let count = 0
    if (element.childElementCount === 0) {
        if (count === 0) {
            element.innerHTML = `<input value="${input}" class="emailItem-input" placeholder="${input}">`
            count  = 1 
        }
    } else {
        const inputHTMl = document.querySelector('.emailItem-input')
        cadastradoGet.forEach((obj) => {
            if (obj.email === loggedEmail) {
                let i = cadastradoGet.indexOf(obj)
                obj[tag] = inputHTMl.value
                arr = obj
                cadastradoGet.splice(i, 1, arr)
                localStorage.setItem('Cadastrado', JSON.stringify(cadastradoGet))
            }
        })
        loggedGet[tag] = inputHTMl.value
        localStorage.setItem('logged', JSON.stringify(loggedGet))
        element.innerHTML = `${tag}: ${inputHTMl.value}`
    }
}

function rePasswordLocal() {
    cadastradoGet.forEach((obj) => {
        if (obj.email === loggedEmail) {
            if (obj.senha === oldPass.value) {
                let i = cadastradoGet.indexOf(obj)
                obj.senha = newPass.value
                arr = obj
                cadastradoGet.splice(i, 1, arr)
                localStorage.setItem('Cadastrado', JSON.stringify(cadastradoGet))
                oldPass.value = ''
                newPass.value = ''
            } else {
                console.error('no matches')
            }
        }
    })
    loggedGet.senha = newPass.value
    localStorage.setItem('logged', JSON.stringify(loggedGet))

}