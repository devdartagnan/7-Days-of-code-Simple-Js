const form = document.querySelector('.form')
const nome = document.querySelector('#name')
const nascimento = document.querySelector('#birth-date')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const values = [nome.value, nascimento.value]
    const ano = values[1].slice(0,4)
    const mes = values[1].slice(5,7)
    const dia = values[1].slice(-2)
    console.log('O nome dgitiado é..', values[0])
    console.log('A data dgitiada é..', values[1])
    console.log(`A data convertida é.. ${dia}-${mes}-${ano}`)
})
