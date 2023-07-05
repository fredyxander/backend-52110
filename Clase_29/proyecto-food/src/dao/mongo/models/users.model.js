import mongoose from "mongoose";

const usersCollection = "users";

const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    role:String,
    ordersUser:[
        {
            type:mongoose.SchemaTypes.ObjectId,
            ref:"orders" //referencia a la coleccion orders
        }
    ]
});

export const usersModel = mongoose.model(usersCollection, userSchema);