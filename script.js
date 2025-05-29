const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

// Maneja la lógica de los botones
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    if (value === "C") {
      clearDisplay();
    } else if (value === "=") {
      calculateResult();
    } else {
      appendToDisplay(value);
    }
  });
});

// Agrega el valor al display
function appendToDisplay(value) {
  display.value += value;
}

// Limpia el display
function clearDisplay() {
  display.value = "";
}

// Calcula el resultado evitando eval()
function calculateResult() {
  try {
    const result = safeEval(display.value);
    display.value = result;
  } catch (error) {
    display.value = "Error";
  }
}

// Evalúa de forma segura (limitada)
function safeEval(expression) {
  // Solo permite números y operaciones matemáticas básicas
  if (/^[0-9+\-*/().\s]+$/.test(expression)) {
    // eslint-disable-next-line no-new-func
    return Function('"use strict";return (' + expression + ")")();
  } else {
    throw new Error("Expresión inválida");
  }
}
