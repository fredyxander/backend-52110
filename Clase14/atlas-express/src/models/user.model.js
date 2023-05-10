import mongoose from "mongoose";

const userCollection = "users"; //Nombre de la coleccion dentro de la base de datos

//esquema
const userSchema = new mongoose.Schema({
    //definimos propiedades del documento para cada usuario
    first_name: {
        type:String,
        required:true
    },
    last_name: String,
    email: {
        type:String, //tipo de dato asignado a email
        required: true, //propiedad obligatorio
        unique: true, // valores unicos para email
        // match: expresion regular
    },
    edad: Number,
    password:{
        type: String,
        required:true
    }
});

//El modelo permite realizar las operaciones en la coleccion users en la base de datos
export const userModel = mongoose.model(userCollection,userSchema);