let result = document.getElementById('result')
let input = document.getElementById('textInput') as HTMLInputElement

function encriptar() {
    if (result && input) {
        if (input.value.length == 0) {
            result.innerHTML = `
                <img src="./src/img/not-found.svg" alt="Texto não encontrado">
                <p><strong>Nenhuma mensagem encontrada</strong></p>
                <p>Digite um texto que você deseja criptografar ou descriptografar.</p>`
        } else {
            let text = input.value

            text = text.replaceAll('e', 'enter')
            text = text.replaceAll('i', 'imes')
            text = text.replaceAll('a', 'ai')
            text = text.replaceAll('o', 'ober')
            text = text.replaceAll('u', 'ufat')

            result.innerHTML = `
            <p id='result-text'>${text}</p>
            <button id='copy' class="btn grey" onClick="copiar()">Copiar</button>
            `
        }
    }
}

function descriptar() {
    if (result && input) {
        if (input.value.length == 0) {
            result.innerHTML = '<img src="./src/img/not-found.svg" alt="Texto não encontrado"><p><strong>Nenhuma mensagem encontrada</strong></p><p>Digite um texto que você deseja criptografar ou descriptografar.</p>'
        } else {
            let text = input.value

            text = text.replaceAll('enter', 'e')
            text = text.replaceAll('imes', 'i')
            text = text.replaceAll('ai', 'a')
            text = text.replaceAll('ober', 'o')
            text = text.replaceAll('ufat', 'u')

            result.innerHTML = `
            <p id='result-text'>${text}</p>
            <button id='copy' class="btn grey" onClick="copiar()">Copiar</button>`
        }
    }
}

function copiar() {
    let text = document.getElementById('result-text')?.innerText
    if (text) {
        navigator.clipboard.writeText(text).then(() => {
            alert('Texto copiado com sucesso!')
        })
    }
}