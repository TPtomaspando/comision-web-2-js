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
