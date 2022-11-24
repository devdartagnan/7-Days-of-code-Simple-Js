const form = document.querySelector('.form')
const nome = document.querySelector('#name')
const nascimento = document.querySelector('#birth-date')
const log = document.querySelector('.log')
const getLocal = JSON.parse(localStorage.getItem('Cadastrado'))
const lista = []


if (getLocal !== null) {
    const lastItem = getLocal.slice(-1)
    //add last log div
    const novoItem = document.createElement("p")
    novoItem.innerText = `Nome: ${lastItem[0].nome} | Data: ${lastItem[0].data}`
    log.appendChild(novoItem)
    log.classList.toggle('visible')
}

form.addEventListener('submit', (e) => {
    setValues()
})
function setValues() {
    const values = [nome.value, nascimento.value]
    const ano = values[1].slice(0, 4)
    const mes = values[1].slice(5, 7)
    const dia = values[1].slice(-2)
    const data = `${dia}-${mes}-${ano}`
    const stringLocal = {
        nome: values[0],
        data: data
    }
    lista.push(stringLocal)
    localStorage.setItem('Cadastrado', JSON.stringify(lista))
    
}
