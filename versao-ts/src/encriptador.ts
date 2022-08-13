let result = document.getElementById('result')
let input = document.getElementById('textInput') as HTMLInputElement

function encriptador() {
    if (result && input) {
        if (input.value.length == 0) {
            result.innerHTML = '<img src="./src/img/not-found.svg" alt="Texto não encontrado"><p><strong>Nenhuma mensagem encontrada</strong></p><p>Digite um texto que você deseja criptografar ou descriptografar.</p>'
        } else {
            result.innerHTML = input.value
        }
    }
}