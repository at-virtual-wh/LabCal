// Parte 1
function suma(a, b) {
  return a + b;
}

function resta(a, b) {
  return a - b;
}

function multiplicacion(a, b) {
  return a * b;
}

function division(a, b) {
  if (b === 0) {
    return 'Error: División por cero';
  }
  return a / b;
}

// Parte 2
function calculadora(operacion) {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  let result;

  if (isNaN(num1) || isNaN(num2)) {
    result = "Por favor, ingresa números válidos.";
  } else {
     if (operacion === 'Suma') {
      result = suma(num1, num2);
    } else {
      if (operacion === 'Resta') {
        result = resta(num1, num2);
      } else {
        if (operacion === 'Multiplicación') {
          result = multiplicacion(num1, num2);
        } else {
          if (operacion === 'División') {
            result = division(num1, num2);
          } else {
            result = "Operación no válida.";
          }
        }
      }
    }
  }

  document.getElementById("result").innerHTML = `<strong>RESULTADO</strong>
   <br> ${operacion}: ${result}`;
}
