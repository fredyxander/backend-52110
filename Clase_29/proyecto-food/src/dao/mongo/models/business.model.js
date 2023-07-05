import mongoose from "mongoose";

const businessCollection = "business";

const businessSchema = new mongoose.Schema({
    name:String,
    products:[]
});

export const businessModel = mongoose.model(businessCollection, businessSchema)