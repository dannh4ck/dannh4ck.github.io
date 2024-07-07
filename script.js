let action = "encode";

function startEncode() {
    action = "encode";
    document.getElementById('welcome-screen').classList.add('fade-out');
    setTimeout(() => {
        document.getElementById('welcome-screen').style.display = 'none';
        document.getElementById('main-screen').style.display = 'block';
        document.getElementById('main-screen').classList.add('fade-in');
        document.getElementById('mode-indicator').innerText = "Modo: Codificar";
        document.getElementById('toggle-btn').innerText = "Cambiar a Decodificar";
    }, 1000);
}

function startDecode() {
    action = "decode";
    document.getElementById('welcome-screen').classList.add('fade-out');
    setTimeout(() => {
        document.getElementById('welcome-screen').style.display = 'none';
        document.getElementById('main-screen').style.display = 'block';
        document.getElementById('main-screen').classList.add('fade-in');
        document.getElementById('mode-indicator').innerText = "Modo: Decodificar";
        document.getElementById('toggle-btn').innerText = "Cambiar a Codificar";
    }, 1000);
}

function toggleAction() {
    if (action === "encode") {
        action = "decode";
        document.getElementById('mode-indicator').innerText = "Modo: Decodificar";
        document.getElementById('toggle-btn').innerText = "Cambiar a Codificar";
    } else {
        action = "encode";
        document.getElementById('mode-indicator').innerText = "Modo: Codificar";
        document.getElementById('toggle-btn').innerText = "Cambiar a Decodificar";
    }
}

function processText() {
    let inputText = document.getElementById("input-text").value;
    let outputText;
    if (action === "encode") {
        outputText = btoa(unescape(encodeURIComponent(inputText)));
    } else {
        try {
            outputText = decodeURIComponent(escape(atob(inputText)));
        } catch (e) {
            outputText = "Error: Texto Base64 no válido.";
        }
    }
    animateText(outputText);
}

function animateText(output) {
    let outputTextArea = document.getElementById("output-text");
    outputTextArea.value = "";
    let index = 0;

    function typeWriter() {
        if (index < output.length) {
            outputTextArea.value += output.charAt(index);
            index++;
            setTimeout(typeWriter, 50); // Ajusta el intervalo de tiempo para la velocidad de escritura
        }
    }

    typeWriter();
}
