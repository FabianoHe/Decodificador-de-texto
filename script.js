function encryptText() {
    const inputText = document.getElementById('inputText').value;
    const encryptedText = inputText
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
    updateOutputText(encryptedText);
}

function decryptText() {
    const inputText = document.getElementById('inputText').value;
    const decryptedText = inputText
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
    updateOutputText(decryptedText);
}

function copyToClipboard() {
    const outputText = document.getElementById('outputText');
    outputText.select();
    document.execCommand('copy');
    showAlert('Texto copiado para a área de transferência!');
}

function updateOutputText(text) {
    const outputText = document.getElementById('outputText');
    outputText.value = text;
    toggleBackgroundImage(text);
}

function toggleBackgroundImage(text) {
    const outputText = document.getElementById('outputText');
    if (text.trim() === "") {
        outputText.style.backgroundImage = "url('Olhando_lupa.png')";
    } else {
        outputText.style.backgroundImage = "none";
    }
}

function showAlert(message) {
    alert(message);
}
