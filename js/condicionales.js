const numero = parseInt(prompt("ingrese numero"));

if (numero % 2 === 0) {
  document.write("el numero ingresado: " + numero + " es par");
} else {
  document.write(`el numero ingresado: ${numero} es impar`);
}
