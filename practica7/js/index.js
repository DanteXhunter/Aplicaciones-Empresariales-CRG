function sum(a, b) {
    return a + b;
}
var resultado = sum(2, 3);
console.log(resultado);
var fSum = sum(2, 3);
console.log(fSum);
// Funciones de orden superior
// Funciones Arrow
var sumArrow = function (c, d) {
    return c + d;
};
// Función anonima
var funcionAnonnima = function () {
    console.log("Hola mundo");
};
funcionAnonnima();
var functionAnonimaArrow = function () { console.log("Hola mundo"); };
functionAnonimaArrow();
/* NO SE PUEDE DECLARAR UNA FUNCION DENTRO DE UN CONSOLE LOG
Console.log(operation(a:number, b:number, c:number, d:number):number =>{ a*b*c*d});
*/
var operation = function (a, b, c, d) { return a * b * c * d; };
function saludo(nombre) {
    return "Hola ".concat(nombre);
}
;
console.log(saludo("Pepito"));
//Function Arrow que no sea anonima
var saludoArrow = function (nombre) { return "Hola" + nombre; };
saludoArrow("Greys");
function advertencia() {
    console.log("Cuidado");
}
advertencia();
function error(mensaje) {
    var mensajeError = document.getElementById("mensajeError");
    mensajeError.innerHTML = "Error en la aplicación";
    throw new Error(mensaje);
}
error("Error en la aplicación");




