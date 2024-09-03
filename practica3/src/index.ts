let normalx:any = 'hola';
normalx = 10;
normalx = true;
let usuario:any = 20;
console.log(normalx);

let nombre:string = 'Cristopher';
nombre = 'Dios';
console.log(nombre);

let value:any;
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

let miValor: unknown;
console.log("Tipo unknown", miValor);

let value1: unknown = miValor;
let value2: any = miValor;
//let value3: boolean = miValor;

const edad:number = 20;
console.log('Mi edad es:', edad);
console.log('Mi edad es:'+ edad);

const sueldo:number = 123.456;
const total:number = Number('123');  //cast
console.log('Sueldo: ', sueldo);
console.log('Total: ', total);

const personaje:string = 'Mark Zuckerberg';
const otroPersonaje:string = "Jeff";
const otroOtroPersonaje:string = ("Steve Jobs y ${personaje}")
console.log(otroOtroPersonaje);

const heroe:string = "Greys";

const antiheroe:string = "wolverine";
console.log(antiheroe);
console.log(antiheroe.toUpperCase());

let vengador:any;
vengador = 'Homelander';
console.log(vengador.charAt(0));

vengador = 150.55

/*El toFixec convierte de string a tipo numerico y aparte redondea, 
la posicion determina los decimales que queremos que haya despues del punto decimal.*/
console.log(vengador.toFixed(1)); 

let villano:any;
villano = 'Green goblin';
villano = 123.7894
console.log((villano as number).toFixed(2));
console.log(villano);


let jugadores:string[]=['Cristiano', 'Lionel', 'Neymar'];
console.log(jugadores)


let listaNumeros : any = document.getElementById("listaNumeros");
let listaNumeros2 : any = document.getElementById("listaNumeros2");
let numeros:number[] = [1,2,3,4,5];
let numeros2: Array<number> = [6,7,8,9,10];

for (let numero of numeros){
    listaNumeros.innerHTML += `<li>${numero}</li>`
}

for (let numero2 of numeros2){
    listaNumeros2.innerHTML += `<li>${numero2}</li>`
}

let miArray : (string | number)[] = ['Carlos',54,24,'Saul',19, 'Luis',20];
console.log(miArray);
let miArray2 : Array <string | number> = ['Mate', 'Rayo McQueen', 19, 'Hudson Hornet'];
console.log(miArray2);
let miArray3 : Array <any> = [true, 10, 'hola', 20.5]
console.log(miArray3);
let miArray4 : number[] = [];
miArray4.push(1);
miArray4.push(2);
miArray4.push(3);
console.log(miArray4.length);
console.log(miArray4.reverse())

let miArray5 = [];
miArray5.push('Carlos');
miArray5.push(20);
miArray5.push(true);
miArray5.push('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDhCRLDorEoL4rXQ5P6ZbeTBIJemh2vakP_A&s');
miArray5.push('Juan');
miArray5.push(25);
miArray5.push('https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/36969.png'); 

// Obtener las figuras por ID
let figura1: any = document.getElementById("figura1");
let figura2:any = document.getElementById("figura2");

// Crear y agregar la primera imagen con su caption
let imagen1 : any = document.createElement("img");
imagen1.src = miArray5[3]; // URL de la imagen 1
let caption1 = document.createElement("figcaption");
caption1.textContent = "Carlos"; // Título de la imagen 1
figura1.appendChild(imagen1);
figura1.appendChild(caption1);

// Crear y agregar la segunda imagen con su caption
let imagen2:any = document.createElement("img");
imagen2.src = miArray5[6]; // URL de la imagen 2
let caption2 = document.createElement("figcaption");
caption2.textContent = "Juan"; // Título de la imagen 2
figura2.appendChild(imagen2);
figura2.appendChild(caption2);