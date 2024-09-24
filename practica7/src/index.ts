function sum(a:number, b:number):number{
    return a + b;
}

let resultado =sum(2,3);
console.log(resultado);

const fSum = sum(2,3);
console.log(fSum);


// Funciones de orden superior

// Funciones Arrow

let sumArrow =(c:number,d:number):number => {
    return c + d; 
}

// Función anonima

let funcionAnonnima = function(){
    console.log("Hola mundo");
}
funcionAnonnima(); 

let functionAnonimaArrow = () => {console.log("Hola mundo")};
functionAnonimaArrow();

/* NO SE PUEDE DECLARAR UNA FUNCION DENTRO DE UN CONSOLE LOG
Console.log(operation(a:number, b:number, c:number, d:number):number =>{ a*b*c*d});
*/

const operation = (a:number, b:number, c:number, d:number):number =>{ return a*b*c*d};

function saludo(nombre:string):string{
    return `Hola ${nombre}`;
};

console.log(saludo("Pepito"));

//Function Arrow que no sea anonima

const saludoArrow = (nombre:string):string => "Hola" + nombre;
saludoArrow("Greys");

function advertencia():void {
    console.log("Cuidado");
}

advertencia();
/*
function error(mensaje:string):never{
    let mensajeError:any = document.getElementById("mensajeError");
    mensajeError.innerHTML ="Error en la aplicación";



    throw new Error(mensaje);
}
error("Error en la aplicación");

// error("Error en la aplicación")
*/
type accion = 'suma' | 'resta';

function operacion(a:number, b:number,operacion:accion){
    if(operacion == 'suma')
    {
        return a + b;
    }
    else{
        return a - b;
    }
}

console.log(operacion(5,16,'suma'));
console.log(operacion(50,10,'resta'));


