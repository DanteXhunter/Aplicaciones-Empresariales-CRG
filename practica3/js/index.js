var normalx = 'hola';
normalx = 10;
normalx = true;
var usuario = 20;
console.log(normalx);
var nombre = 'Cristopher';
nombre = 'Dios';
console.log(nombre);
var value;
console.log(value);
value = true;
value = 10;
value = 'hola';
value = [];
value = {};
value = Math.random;
value = null;
value = undefined;
console.log(value);
var miValor;
console.log("Tipo unknown", miValor);
var value1 = miValor;
var value2 = miValor;
//let value3: boolean = miValor;
var edad = 20;
console.log('Mi edad es:', edad);
console.log('Mi edad es:' + edad);
var sueldo = 123.456;
var total = Number('123'); //cast
console.log('Sueldo: ', sueldo);
console.log('Total: ', total);
var personaje = 'Mark Zuckerberg';
var otroPersonaje = "Jeff";
var otroOtroPersonaje = ("Steve Jobs y ${personaje}");
console.log(otroOtroPersonaje);
var heroe = "Greys";
var antiheroe = "wolverine";
console.log(antiheroe);
console.log(antiheroe.toUpperCase());
var vengador;
vengador = 'Homelander';
console.log(vengador.charAt(0));
vengador = 150.55;
/*El toFixec convierte de string a tipo numerico y aparte redondea,
la posicion determina los decimales que queremos que haya despues del punto decimal.*/
console.log(vengador.toFixed(1));
var villano;
villano = 'Green goblin';
villano = 123.7894;
console.log(villano.toFixed(2));
console.log(villano);
var jugadores = ['Cristiano', 'Lionel', 'Neymar'];
console.log(jugadores);
var listaNumeros = document.getElementById("listaNumeros");
var listaNumeros2 = document.getElementById("listaNumeros2");
var numeros = [1, 2, 3, 4, 5];
var numeros2 = [6, 7, 8, 9, 10];
for (var _i = 0, numeros_1 = numeros; _i < numeros_1.length; _i++) {
    var numero = numeros_1[_i];
    listaNumeros.innerHTML += "<li>".concat(numero, "</li>");
}
for (var _a = 0, numeros2_1 = numeros2; _a < numeros2_1.length; _a++) {
    var numero2 = numeros2_1[_a];
    listaNumeros2.innerHTML += "<li>".concat(numero2, "</li>");
}
var miArray = ['Carlos', 54, 24, 'Saul', 19, 'Luis', 20];
console.log(miArray);
var miArray2 = ['Mate', 'Rayo McQueen', 19, 'Hudson Hornet'];
console.log(miArray2);
var miArray3 = [true, 10, 'hola', 20.5];
console.log(miArray3);
var miArray4 = [];
miArray4.push(1);
miArray4.push(2);
miArray4.push(3);
console.log(miArray4.length);
console.log(miArray4.reverse());
var miArray5 = [];
miArray5.push('Carlos');
miArray5.push(20);
miArray5.push(true);
miArray5.push('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDhCRLDorEoL4rXQ5P6ZbeTBIJemh2vakP_A&s');
miArray5.push('Juan');
miArray5.push(25);
miArray5.push('https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/36969.png');
// Obtener las figuras por ID
var figura1 = document.getElementById("figura1");
var figura2 = document.getElementById("figura2");
// Crear y agregar la primera imagen con su caption
var imagen1 = document.createElement("img");
imagen1.src = miArray5[3]; // URL de la imagen 1
var caption1 = document.createElement("figcaption");
caption1.textContent = "Carlos"; // Título de la imagen 1
figura1.appendChild(imagen1);
figura1.appendChild(caption1);
// Crear y agregar la segunda imagen con su caption
var imagen2 = document.createElement("img");
imagen2.src = miArray5[6]; // URL de la imagen 2
var caption2 = document.createElement("figcaption");
caption2.textContent = "Juan"; // Título de la imagen 2
figura2.appendChild(imagen2);
figura2.appendChild(caption2);
