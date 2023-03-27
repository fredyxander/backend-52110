//nulish
let variable = 0; //valores falsy

const resultadoSinNull = variable || "valor vacio";
// console.log(resultadoSinNull);

const resultadoConNulish = variable ?? "valor vacio";
// console.log(resultadoConNulish);


//variables privadas de las clases: variables solamente accesibles dentro de la clase
class Persona{
    #variablePrivada="soy una variable privada";
    constructor(nombre){
        this.nombre=nombre;
    }

    //metodo para acceder a la variable privada
    getVariablePrivada(){
        return this.#variablePrivada;
    }

    #metodoPrivado(){
        console.log("soy un metodo privado");
    }
}

//Crear instancia de una clase es crear un objeto a partir de la clase
const pepito = new Persona("pepe");
console.log(pepito.nombre);
// console.log(pepito.#variablePrivada);//Error
console.log(pepito.getVariablePrivada());
// pepito.#metodoPrivado();//Error