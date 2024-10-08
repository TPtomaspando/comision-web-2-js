//ejercicio cajero automatico
//pedir al usuario que ingrese una opcion: 1- consultar saldo, 2- depositar dinero, 3- extraer dinero, 4- salir

//inicializar variable

let saldo = 1000;

const opcion = parseInt(
  prompt(
    "seleccione una opcion: 1- consultar saldo, 2- depositar dinero, 3- extraer dinero, 4- salir"
  )
);

//if(opcion === 1){
// document.write("mostrar saldo")
//}else if(opcion === 2){
//document.write("depositar dinero")

//}else if(opcion === 3){
// document.write("extraer dinero")

//}else if(opcion === 4){
// document.write("Cerrando el sistema")
//}else{
//  document.write("seleccionaste una opcion invalida")
//}

switch (opcion) {
  case 1:
    document.write("El saldo es: " + saldo);
    break;
  case 2:
    const deposito = parseFloat(prompt("ingrese el monto"));
    if (deposito > 0) {
      saldo = saldo + deposito;
      document.write(
        "depositaste: " + deposito + "tu saldo actual es: " + saldo
      );
    } else {
      document.write("ingresaste una cantidad invalida");
    }

    break;
  case 3:
    const montoExtraer = parseFloat(prompt("ingrese el monto a extraer"));
    if (montoExtraer > 0) {
      if (montoExtraer <= saldo) {
        saldo = saldo - montoExtraer;
        document.write(
          "monto a extraer: " + montoExtraer + "tu saldo es: " + saldo
        );
      } else {
        document.write("saldo insuficiente");
      }
    } else {
      document.write("ingresaste una cantidad invalida");
    }

    break;
  case 4:
    document.write("Cerrando el sistema");
    break;
  default:
    document.write("seleccionaste una opcion invalida");
}
