var result = document.getElementById('result');
var input = document.getElementById('textInput');
function encriptar() {
    if (result && input) {
        if (input.value.length == 0) {
            result.innerHTML = "\n                <img src=\"./src/img/not-found.svg\" alt=\"Texto n\u00E3o encontrado\">\n                <p><strong>Nenhuma mensagem encontrada</strong></p>\n                <p>Digite um texto que voc\u00EA deseja criptografar ou descriptografar.</p>";
        }
        else {
            var text = input.value;
            text = text.replaceAll('e', 'enter');
            text = text.replaceAll('i', 'imes');
            text = text.replaceAll('a', 'ai');
            text = text.replaceAll('o', 'ober');
            text = text.replaceAll('u', 'ufat');
            result.innerHTML = "\n            <p id='result-text'>".concat(text, "</p>\n            <button id='copy' class=\"btn grey\" onClick=\"copiar()\">Copiar</button>\n            ");
        }
    }
}
function descriptar() {
    if (result && input) {
        if (input.value.length == 0) {
            result.innerHTML = '<img src="./src/img/not-found.svg" alt="Texto não encontrado"><p><strong>Nenhuma mensagem encontrada</strong></p><p>Digite um texto que você deseja criptografar ou descriptografar.</p>';
        }
        else {
            var text = input.value;
            text = text.replaceAll('enter', 'e');
            text = text.replaceAll('imes', 'i');
            text = text.replaceAll('ai', 'a');
            text = text.replaceAll('ober', 'o');
            text = text.replaceAll('ufat', 'u');
            result.innerHTML = "\n            <p id='result-text'>".concat(text, "</p>\n            <button id='copy' class=\"btn grey\" onClick=\"copiar()\">Copiar</button>");
        }
    }
}
function copiar() {
    var _a;
    var text = (_a = document.getElementById('result-text')) === null || _a === void 0 ? void 0 : _a.innerText;
    if (text) {
        navigator.clipboard.writeText(text).then(function () {
            alert('Texto copiado com sucesso!');
        });
    }
}
