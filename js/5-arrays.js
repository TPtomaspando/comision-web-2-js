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
