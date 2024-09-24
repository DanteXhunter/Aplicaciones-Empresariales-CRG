var miVariable = "Hola mundo";
console.log(miVariable);
// Create an Object
var person1 = {
    firstName1: "John",
    lastName1: "Doe",
    age: 50
};
// Destructuring
var firstName1 = person1.firstName1, lastName1 = person1.lastName1;
console.log(firstName1, ' ', lastName1);
var miNombre = "Dante";
var a1 = miNombre[0], a2 = miNombre[1], a3 = miNombre[2], a4 = miNombre[3], a5 = miNombre[4];
console.log(a1, a2, a3, a4, a5);
var fruits = ["platano", "naranja", "mango", "manzana"];
var f1 = fruits[0], f2 = fruits[1], f3 = fruits[2], f4 = fruits[3];
console.log(f1, f2);
var Persona = /** @class */ (function () {
    function Persona(nombre, edad, apellidoPaterno, apellidoMaterno) {
        this.nombre = nombre;
        this.apellidoMaterno = apellidoMaterno;
        this.apellidoPaterno = apellidoPaterno;
        this.edad = edad;
    }
    Persona.prototype.getEdad = function () {
        return this.edad;
    };
    Persona.prototype.setEdad = function (edad) {
        this.edad = this.edad;
    };
    Persona.prototype.getNombre = function () {
        return this.nombre;
    };
    Persona.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    Persona.prototype.getapellidoMaterno = function () {
        return this.apellidoMaterno;
    };
    Persona.prototype.getapellidoPaterno = function () {
        return this.apellidoPaterno;
    };
    Persona.prototype.setapellidoMaterno = function (apellidoMaterno) {
        this.apellidoMaterno;
    };
    Persona.prototype.setapellidoPaterno = function (apellidoPaterno) {
        this.apellidoPaterno;
    };
    Persona.prototype.getNombreCompleto = function () {
        return this.nombre + ' ' + this.apellidoPaterno + ' ' + this.apellidoMaterno;
    };
    return Persona;
}());
var personajx = new Persona('Tony', 59, 'Stark', 'Godinez');
console.log(personajx.nombre);
console.log(personajx.apellidoPaterno);
console.log(personajx.apellidoMaterno);
console.log(personajx.edad);
var personajy = new Persona('Carlitos', 19, 'Godinez', 'Perez');
console.log(personajy.nombre, personajy.edad);
personajy.edad++;
personajy.setEdad(21);
personajy.setNombre('Walmart');
console.log(personajy.nombre, personajy.edad);
console.log(personajy.getNombreCompleto());
var userAccount = /** @class */ (function () {
    function userAccount(name, id) {
        this.name = name;
        this.id = id;
    }
    return userAccount;
}());
var usuarioI = new userAccount('Imagine Dragons', '1');
console.log(usuarioI.name, usuarioI.id);
