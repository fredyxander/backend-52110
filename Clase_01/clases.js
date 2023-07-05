//crear objetos en nuestra aplicacion
// const pepe = {
//     name:"pepe",
//     edad:20,
//     city:"Bogota"
// };

// const maria = {
//     name:"maria",
//     edad:30,
//     city:"Sao paulo"
// }

//creacion de la clase
class Person{
    constructor(name,age,city){
        //constructor define las propiedades y sus valores, cuando creamos el objeto
        //this va a ser igual al objeto que estamos creando
        this.name=name;
        this.age=age;
        this.city=city;
        this.course="backend con node";
    }

    //metodos son las acciones que pueden realizar los objetos
    saludar(){
        console.log(`hola soy ${this.name}`);
    }
}

//crear objetos uilizando la clase Person
const pepe = new Person("pepe",20,"Bogota");
console.log(pepe);
console.log(pepe.city);
console.log(pepe.saludar());

const maria = new Person("maria",30,"Buenos aires");
console.log(maria);

//suggar syntax
let edad=20;
edad=edad+1;
edad++;