console.log("Hola codespaces")

const nuevoHeroe:string = 'chapulin colorado'

function returnName():string{
    return nuevoHeroe;
    
}

console.log(returnName());

const heroeNombre = returnName();
let otraVariable = returnName();
console.log('De que tipo es:', typeof otraVariable);

// Parametros obligatorios en funciones
const nombreCompleto = (nombre:string, apellido:string):string =>{
    return `${nombre} ${apellido}`;
}

const tuNombre = nombreCompleto("Carlos", "Vela");
console.log(tuNombre);

/// ----------------------------------------------------------------
const nombreCompleto2 = (nombre:string, apellido?:string):string =>{
    return `${nombre} ${apellido || 'Sin apellido'}`;
}

const tuNombre2 = nombreCompleto2("Carlos2");
console.log(tuNombre2);


/// ----------------------------------------------------------------
const nombreCompleto3 = (nombre?:string, apellido?:string,mayusculas:boolean=false) =>{

    if (mayusculas){
        return `${nombre || 'No se proporciono nombre'}, ${apellido || 'No se proporcino apellido'}`.toUpperCase(); 

    }else{
        return `${nombre || 'No se proporciono nombre'}, ${apellido || 'No se proporcino apellido'}`.toUpperCase(); 
    }
}

const tuNombre3 = nombreCompleto3("Carlos3","Serrano3",true);
console.log(tuNombre3);


/// ----------------------------------------------------------------

