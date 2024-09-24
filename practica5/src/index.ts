let miVariable: string = "Hola mundo";
console.log(miVariable);


// Create an Object
const person1 = {
    firstName1: "John",
    lastName1: "Doe",
    age:50
}



// Destructuring
let {firstName1, lastName1} = person1;
console.log(firstName1, ' ', lastName1);

let miNombre: string = "Dante";
let[a1, a2, a3, a4, a5]:any = miNombre;
console.log(a1, a2, a3, a4, a5);

const fruits = ["platano", "naranja", "mango", "manzana"]
let [f1, f2, f3, f4]:any = fruits;
console.log(f1, f2);

class Persona {
    nombre: string;
    apellidoMaterno: string;
    apellidoPaterno;
    edad: number;

    constructor(nombre: string, edad: number,apellidoPaterno:string, apellidoMaterno:string){
        this.nombre = nombre;
        this.apellidoMaterno = apellidoMaterno;
        this.apellidoPaterno = apellidoPaterno;
        this.edad = edad;
    }

    getEdad():number{
        return this.edad;
    }

    setEdad(edad:number):void{
        this.edad = this.edad;
    }

    getNombre():string{
        return this.nombre;
    }

    setNombre(nombre:string):void{
        this.nombre=nombre;
    }

    getapellidoMaterno():string{
        return this.apellidoMaterno;
    }

    getapellidoPaterno():string{
        return this.apellidoPaterno;
    }

    setapellidoMaterno(apellidoMaterno:string):void{
         this.apellidoMaterno;
    }

    setapellidoPaterno(apellidoPaterno:string):void { 
         this.apellidoPaterno;
    }

    getNombreCompleto():string{
        return this.nombre + ' ' + this.apellidoPaterno + ' ' + this.apellidoMaterno;
    }
}

const personajx  = new Persona('Tony',59,'Stark','Godinez');
console.log(personajx.nombre);
console.log(personajx.apellidoPaterno);
console.log(personajx.apellidoMaterno);
console.log(personajx.edad);

let personajy = new Persona('Carlitos', 19, 'Godinez', 'Perez');
console.log(personajy.nombre,personajy.edad);
personajy.edad ++;
personajy.setEdad(21);
personajy.setNombre('Walmart');
console.log(personajy.nombre, personajy.edad);

console.log(personajy.getNombreCompleto());

    interface user {
        name: string;
        id: string;
    }

    class userAccount{
        name:string;
        id: string;

        constructor (name:string, id:string){
            this.name=name
            this.id=id
        }
    }

    const usuarioI:user = new userAccount('Imagine Dragons', '1');
    console.log(usuarioI.name, usuarioI.id)

 /* RETO: Crear al menos 5 clases que van a usar en su proyecto,
    3 propiedades, */

    class Productos {
        precio:GLfloat;

        constructor(precio:GLfloat){
            this.precio = precio
        }
    }

    class Usuario{

    }

    class Carrito{

    }

    class MetodoDePago{

    }

    class Asistencia{

    }