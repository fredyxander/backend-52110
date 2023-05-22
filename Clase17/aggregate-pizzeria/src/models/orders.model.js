import mongoose from "mongoose";

const ordersCollection = "orders";

const orderSchema = new mongoose.Schema({
    name:String,
    size:{
        type:String,
        enum:["small", "medium", "large"],
        default:"small"
    },
    price:Number,
    quantity:Number,
    date:Date
});

export const ordersModel = mongoose.model(ordersCollection,orderSchema);