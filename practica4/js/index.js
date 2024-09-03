// Tuplas
var tupla = ["Juancho", 1];
console.log(tupla);
console.log(tupla[0]);
console.log(typeof tupla);
var ourTuple = ["Juancho", 40, true];
console.log('Nombre:', ourTuple[0]);
console.log('Edad:', ourTuple[1]);
// Ternario
var estadoCivil = ourTuple[2] ? 'casado' : 'soltero';
console.log('Estado Civil:', estadoCivil);
var ourtuple2;
ourtuple2 = [23, false, 'Hugo'];
console.log(ourtuple2);
var ourReadonlyTuple = [5, true, 'Luis'];
ourReadonlyTuple[0] = 30;
console.log(ourReadonlyTuple);
var graph = [55.2, 41.3];
console.log(graph);
//Desestrucración de variables
var person = {
    firstName: 'Cristiano',
    lastName: 'Ronaldo',
    age: 39
};
console.log(person.firstName);
var nombreChido = person.firstName;
console.log(nombreChido);
var firstName = person.firstName, lastName = person.lastName, age = person.age;
console.log(firstName, lastName, age);
// Usando typescript y desestructuración de variables hay que generar una serie de fibbonacio con hasta 100 numeros.
// Gráficar los resultados en pantalla chart.js
function generarSerieFibonacci(n) {
    var serie = [0, 1];
    for (var i = 2; i < n; i++) {
        serie[i] = serie[i - 1] + serie[i - 2];
    }
    return serie;
}
var serieFibonacci = generarSerieFibonacci(30);
console.log(serieFibonacci);
// Generar
