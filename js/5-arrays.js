//declarar un array vacio
const precios = [];

//declarar un array con datos
const peliculas = ["shrek 1", true, 2024, "shrek 2", "Titanic"];

//mostrar array en el documento html
document.write(precios + "<br>");
document.write(peliculas + "<br>");
//mostrar el array en consola
console.log(precios);
console.log(peliculas);

document.write(
  "<p>Cantidad de elementos en el array de peliculas: </p>" + peliculas.length
);

//mostrar un elemento del array

document.write("<p>mostrar un elemento del array</p>" + peliculas.length[4]);

//mostrar el array completo
document.write("<h2>mostrar un elemento del array</h2>" + peliculas.length[4]);
document.write("<ul>");
for (let i = 0; i < peliculas.length; i++) {
  document.write(`<li>${peliculas[i]}</li>`);
}
<ul>
  <li>peliculas[0]</li>
  <li>peliculas[1]</li>
  <li>peliculas[2]</li>
  <li>peliculas[3]</li>
</ul>;

//agregar elementos en el array
//agregar elemento al principio del array
peliculas.unshift("intelestelar", "los increibles");
document.write(
  "<h2>integramos 2 elementos al principio del array, peliculas</h2>" +
    peliculas.length
);
document.write("<ul>");
for (let i = 0; i < peliculas.length; i++) {
  document.write(`<li>${peliculas[i]}</li>`);
}
document.write("</ul>");

//agregar elemento al final del array
peliculas.push("furia de titanes");
document.write(
  "<h2>integramos 1 elemento al final del array, peliculas</h2>" +
    peliculas.length
);
document.write("<ul>");
for (let i = 0; i < peliculas.length; i++) {
  document.write(`<li>${peliculas[i]}</li>`);
}
document.write("</ul>");

peliculas.splice(3, 0, "spiderman no way home");
document.write(
  "<h2>integramos 1 elemento en el medio del array, peliculas</h2>" +
    peliculas.length
);
document.write("<ul>");
for (let i = 0; i < peliculas.length; i++) {
  document.write(`<li>${peliculas[i]}</li>`);
}
document.write("</ul>");

//modificar elementos en el array
peliculas[4] = "Cars 1";
document.write(
  "<h2>Modificamos un elemento del array, peliculas</h2>" + peliculas.length
);
document.write("<ul>");
for (let i = 0; i < peliculas.length; i++) {
  document.write(`<li>${peliculas[i]}</li>`);
}
document.write("</ul>");

//borrar elememtos en el array
//borrar elementos al principio
peliculas.shift();
document.write(
  "<h2>Borramos un elemento del principio del array, peliculas</h2>" +
    peliculas.length
);
document.write("<ul>");
for (let i = 0; i < peliculas.length; i++) {
  document.write(`<li>${peliculas[i]}</li>`);
}
document.write("</ul>");

//borrar al final
peliculas.pop();
document.write(
  "<h2>Borramos el ultimo elemento del array, peliculas</h2>" + peliculas.length
);
document.write("<ul>");
for (let i = 0; i < peliculas.length; i++) {
  document.write(`<li>${peliculas[i]}</li>`);
}
document.write("</ul>");

//borrar en el medio del array

peliculas.splice(4, 1);
document.write(
  "<h2>Borramos un elemento del medio del array, peliculas</h2>" +
    peliculas.length
);
document.write("<ul>");
for (let i = 0; i < peliculas.length; i++) {
  document.write(`<li>${peliculas[i]}</li>`);
}
document.write("</ul>");

//quiero encontrar un elemento en el array "titanic"

const encontreTitanic = peliculas.find(
  (itemPelicula) => itemPelicula === "Titanic"
);
console.log(encontreTitanic);

//buscamos la posicion de las peliculas anteriores
const posicionPeliTitanic = peliculas.findIndex((item) => item === "Titanic");

document.write(
  `<p>peli encontrada ${encontreTitanic}, esta en la posicion ${posicionPeliTitanic} de </p>`
);

//operador terneario ? !

//(condicion logica) ? lo que deberia ser si se cumple la condicion, lo que deberia ser si no se cumple la condicion

document.write(
  $,
  { encontreTitanic }
    ? `<p>peli encontrada ${encontreTitanic}, esta en la posicion ${posicionPeliTitanic} de </p>`
    : `<p>no se enocntro la pelicula desada</p>`
);

//quiero filtrar elementos del array
const sagaShrek = peliculas.filter((pelicula) => pelicula.includes("shrek"));
console.log(peliculas[1].includes("shrek"));
console.log(sagaShrek);
