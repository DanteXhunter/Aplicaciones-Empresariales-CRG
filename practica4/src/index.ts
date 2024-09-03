// Tuplas

let tupla: [string, number] = ["Juancho", 1];
console.log(tupla);
console.log(tupla[0]);
console.log(typeof tupla);

let ourTuple: [string, number, boolean] = ["Juancho", 40, true];
console.log('Nombre:',ourTuple [0]);
console.log('Edad:',ourTuple [1]);

// Ternario

let estadoCivil:string = ourTuple[2] ? 'casado' : 'soltero';
console.log('Estado Civil:',estadoCivil);

let ourtuple2: [number, boolean, string];   
ourtuple2 = [23, false, 'Hugo'];

console.log(ourtuple2);

const ourReadonlyTuple: [number, boolean, string] = [5,true,'Luis'];
ourReadonlyTuple[0] = 30;
console.log(ourReadonlyTuple);

const graph: [x:number, y:number] = [55.2, 41.3];
console.log(graph);


//Desestrucración de variables
const person = {
    firstName: 'Cristiano',
    lastName: 'Ronaldo',
    age: 39
};

console.log(person.firstName);

let nombreChido:string = person.firstName;
console.log(nombreChido);

let {firstName, lastName, age} = person;
console.log(firstName, lastName, age);

// Usando typescript y desestructuración de variables hay que generar una serie de fibbonacio con hasta 100 numeros.
// Gráficar los resultados en pantalla chart.js
function generarSerieFibonacci(n: number): number[] {
    let serie: number[] = [0, 1];
    for (let i = 2; i < n; i++) {
        serie[i] = serie[i - 1] + serie[i - 2];
    }
    return serie;
}

const serieFibonacci = generarSerieFibonacci(30);
console.log(serieFibonacci);

// Generar