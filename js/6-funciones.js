//declarar variables
const nombrePersona = prompt("ingrese un nombre");
const apellidoPersona = prompt("ingrese un apellido");

//funciones declarativas
//funciones sin parametro
function saludar() {
  document.write("<p>Hola mundo 🌎</p>");
}
//funcion con parametro
function saludarPersona(nombre, apellido) {
  document.write(`<p>Hola ${nombre},${apellido}</p>`);
}

//funciones que retornan un valor
function sumar(numero1, numero2) {
  const total = numero1 + numero2;
  return total;
}

//arrow function
const sumar = (numero1, numero2) => {
  const total = numero1 + numero2;
  return total;
};

//usar function
saludar();

document.write("<p>Aqui agrego un ejemplo de suma (4+2)</p>" + (4 + 2));
document.write("<p>Aqui agrego un ejemplo de resta (4-2)</p>" + (4 - 2));
document.write("<p>Aqui agrego un ejemplo de multiplicacion (4*2)</p>" + 4 * 2);

saludarPersona(nombrePersona, apellidoPersona);
saludarPersona("Christian", "Arrieta");

const resultado = sumar(7, 20);
document.write(`<p>El resultado de la suma es: ${resultado}</p>`);
