import mongoose from "mongoose";

const contactsCollection = "contacts";

const contactsSchema = new mongoose.Schema({
    nombreCompleto:{type:String, required:true},
    email:{type:String, required:true},
    telefono:{type:String, required:true},
    password:{type:String, required:true},
});

export const contactsModel = mongoose.model(contactsCollection, contactsSchema);