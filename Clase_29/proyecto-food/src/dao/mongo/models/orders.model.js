import mongoose from "mongoose";

const ordersCollection = "orders";

const orderSchema = new mongoose.Schema({
    orderNumber:String,
    orderBusiness:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:"business" //ref a la coleccion business
    },
    orderUser:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:"users",  //referencia a la coleccion users
    },
    products:[],
    totalPrice: Number
});

export const ordersModel = mongoose.model(ordersCollection, orderSchema);