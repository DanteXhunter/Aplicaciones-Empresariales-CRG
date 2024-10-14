console.log("Hola mundo")

const _ = require('lodash');

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(_.chunk(array, 2));

let arreglo = ["Juan", "Pedro","", "Maria", "Luis", "Ana", "Carlos", "Jose", "Luisa", "Marta", "Sofia", ""];

console.log(_.chunk(arreglo, 2));

// Compacta el arreglo e imprime los valores que son diferentes a falso
console.log(_.compact(arreglo));

// Fusionar dos arreys
let array1 = ['superman', 'batman', 'flash']
let arra2 = ['thor', 'ironman', 'hulk']
console.log(_.concat(array1, arra2));


// Diferencia entre dos arreglos, pero solo devuelve los del el 1er array
let array3 = ['El chavo', 'El chapulin', 'Chespirito']
let array4 = ['El chavo', 'El chompiras', 'Dr. Chapatin', 'El botija']
console.log(_.difference(array3, array4));

// Drop elimina los primeros n elementos del arreglo
let array5 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
console.log(_.drop(array5, 5));



const numeroAleatorio = _.random(0, 100);
console.log(numeroAleatorio);


const saludar = () => {
    console.log("Hola mundo, ¿Cómo estás?");
}

saludar();
saludar();
saludar();

const saludarMayito = _.once(saludar);


// Ordenamiento por argumentos
const users = [
    { 'user': 'barney', 'age': 36},
    { 'user': 'guadarrama', 'age': 20},
    { 'user': 'fred', 'age': 40},
    { 'user': 'pebbles', 'age': 1}
];

const sortedUsers = _.sortBy(users, ['user']);
const sortedUsers2 = _.sortBy(users, ['age'],['asc']);
console.log(sortedUsers);
console.log(sortedUsers2);

const obtieneNumero = () => {
    return _.random(0, 100);
}

let result = _.times(5, obtieneNumero);
console.log(result);


/*  -----------------------------------------------------------------------------------------------------------------------

       Reto 1
Crear un arreglo con 100 numeros aleatorios y mostrar los numeros pares
y los numeros impares en arreglos diferentes
*/ 


const reto1 = () => {
    return _.random(0, 100);
}

let result1 = _.times(100, reto1);

let pares = [];
let impares = [];

result1.forEach(num => {
    if (num % 2 === 0) {
        pares.push(num);
    } else {
        impares.push(num);
    }
});


console.log("Números pares:", pares);
console.log("Números impares:", impares);

/* -----------------------------------------------------------------------------------------------------------------------
         Reto 2
Crear un arreglo con 100 números aleatorios y mostrar los números primos
y los números no primos en arreglos diferentes
*/

const reto2 = () => {
    return _.random(0, 100);
}
let result2 = _.times(100, reto2);
 
const esPrimo = (num) => {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

let [primos, noPrimos] = _.partition(result2, esPrimo);

// Muestra los resultados
console.log("Números primos:", primos);
console.log("Números no primos:", noPrimos);

/*        Reto 3
Crear un arreglo de nombres y mostrar los nombres que empiecen con la letra 'A'  
y los nombres que no empiecen con la letra 'A' en arreglos diferentes
*/ 

let nombres = ["Juan", "Amelia", "Maria", "Luis", "Ana", "Carlos", "Jose", "Luisa", "Athenea", "Sofia"];

let agrupadosPorA = _.groupBy(nombres, (nombre) => nombre.startsWith('A') ? 'A' : 'Otros');

console.log(agrupadosPorA);

