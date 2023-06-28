import mongoose from "mongoose";

export class MongoSingleton{
    static #instance;

    constructor(){
        mongoose.connect("mongodb+srv://fredy:coder@coderbackend.d0kaklh.mongodb.net/singletonDB?retryWrites=true&w=majority");
    };

    static async getInstance(){
        if(MongoSingleton.#instance){//SI YA SE CREO LA INSTANCIA
            console.log("base de datos ya conectada");
            return MongoSingleton.#instance;
        }
        this.#instance = new MongoSingleton();
        console.log("nueva conexion a la base de datos");
        return this.#instance;
    }
}