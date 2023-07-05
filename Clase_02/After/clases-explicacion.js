class Pet{
    #TypePet="Perro";
    constructor(name, age){
        //el contructor ayuda a crear las propiedades de los objetos, e inicializa las propiedades.
        this.location="Italia";
        this.name=name;
        this.age=age;
    }

    //metodos: funciones de la clase,acciones de los objetos
    //metodos publicos:
    eat(food){
        console.log(`${this.name} Comiendo ${food}`);
    }

    //metodos privados:
    #metodoPrivado(){
        console.log("metodo privado");
    }

    //acceder a propiedad privada por medio de un metodo publico
    getPrivateProperty(){
        return this.#TypePet;
    }

    //metodos estaticos
    static staticMethod(){
        console.log("metodo estatico")
    }
}

//crear una instancia(objeto) de la clase
const pet1 = new Pet("Toby",2);
console.log("pet1: ", pet1);
pet1.eat("carne");
console.log(pet1.getPrivateProperty());
Pet.staticMethod();


const pet2 = new Pet("Scooby",3);
console.log("pet2: ", pet2);
pet2.eat("fish");