//const numero = parseInt(prompt("ingrese numero"));

//if (numero % 2 === 0) {
// document.write("el numero ingresado: " + numero + " es par");
//} else {
// document.write(`el numero ingresado: ${numero} es impar`);
//}

//ejercicio 2

//Solicitar al usuario su edad e informar si esta obligado o no
//16-17 o mayores de 70:puedes votar.(optativo)
//18-70 : estas obligado a votar

const edad = parseInt(prompt("ingrese su edad"));

if (edad >= 1 && edad <= 105) {
  if ((edad >= 16 && edad <= 17) || edad >= 70) {
    document.write("es optativo que votes");
  } else {
    if (edad >= 18 && edad <= 70) {
      document.write("es obligatorio que votes");
    } else {
      document.write("no puedes votar");
    }
  }
} else {
  alert("ingresaste un valor invalido");
}
