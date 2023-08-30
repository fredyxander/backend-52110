import mongoose from "mongoose";

const productsCollection = "products";

const productsSchema =  new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true,
        enum:["Ropa","Tecnologia","Deportes"]
    },
    code:{
        type:String,
        required:true,
        unique:true
    },
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"users"
    }
});

export const productsModel = mongoose.model(productsCollection,productsSchema);