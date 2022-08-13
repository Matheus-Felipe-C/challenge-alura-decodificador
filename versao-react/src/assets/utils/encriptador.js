let input = document.getElementById('textInput')
let result = document.getElementById('resultado')

function criptografar() {
    result.innerHTML = input.value
}

function descriptografar() {
    result.innerHTML = input.value
}

export {criptografar, descriptografar}