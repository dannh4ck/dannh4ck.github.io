let mode = "codificar";

function toggleAction() {
  const btn = document.getElementById("toggle-btn");
  const modeText = document.getElementById("mode-indicator");

  if (mode === "codificar") {
    mode = "decodificar";
    btn.innerText = "Cambiar a Codificar";
  } else {
    mode = "codificar";
    btn.innerText = "Cambiar a Decodificar";
  }

  modeText.innerText = `Modo: ${mode.charAt(0).toUpperCase() + mode.slice(1)}`;
}

function processText() {
  const input = document.getElementById("input-text").value;
  let output = "";

  try {
    if (mode === "codificar") {
      output = btoa(unescape(encodeURIComponent(input)));
    } else {
      output = decodeURIComponent(escape(atob(input)));
    }
  } catch (err) {
    output = "⚠️ Error al procesar el texto. Verifica el formato.";
  }

  const outputElement = document.getElementById("output-text");
  outputElement.style.whiteSpace = "pre-wrap";
  outputElement.style.overflowWrap = "break-word";
  outputElement.style.wordWrap = "break-word";

  animateText(output);
}

function animateText(text) {
  let t = document.getElementById("output-text");
  t.value = "";
  let n = 0;
  !(function o() {
    n < text.length && ((t.value += text.charAt(n)), n++, setTimeout(o, 50));
  })();
}

function copyToClipboard() {
  const outputText = document.getElementById("output-text").value;

  if (outputText.trim() === "") {
    alert("⚠️ No hay texto para copiar.");
    return;
  }

  const outputElement = document.getElementById("output-text");
  outputElement.focus();
  outputElement.select();

  const toast = document.getElementById("toast");
  toast.classList.add("show");

  navigator.clipboard
    .writeText(outputText)
    .then(() => {
      setTimeout(() => {
        toast.classList.remove("show");
      }, 3000);
    })
    .catch((err) => {
      console.error("Error al copiar el texto: ", err);
      if (!document.execCommand('copy')) {
        alert("⚠️ No se pudo copiar el texto. Intenta nuevamente.");
      }
      toast.classList.remove("show");
    });
}

// Animación terminal en el footer
window.addEventListener('DOMContentLoaded', () => {
  const terminal = document.getElementById('terminal-animation');
  const output = document.getElementById('terminal-output');
  const comando = 'dannh4ck@github.io:~$ echo "Made by dannh4ck"';
  const resultado = 'Made by dannh4ck';
  let i = 0;

  function escribirComando() {
    if (i <= comando.length) {
      terminal.innerHTML = comando.slice(0, i) + '<span class="terminal-cursor">█</span>';
      i++;
      setTimeout(escribirComando, 55);
    } else {
      terminal.innerHTML = comando;
      setTimeout(() => {
        output.textContent = resultado;
      }, 500);
    }
  }

  escribirComando();
});
