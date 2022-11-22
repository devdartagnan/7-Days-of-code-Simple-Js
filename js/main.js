const form = document.querySelector('.form')
const nome = document.querySelector('#name')
const nascimento = document.querySelector('#birth-date')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log('O nome dgitiado é?',nome.value)
    console.log('A data dgitiada é?',nascimento.value)
})