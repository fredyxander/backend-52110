import mongoose from "mongoose";

const usersCollection = "users";

const usersSchema = new mongoose.Schema({
    first_name:{type:String,required:true},
    last_name:{type:String,required:true},
    age:{type:Number,required:true},
    email:{type:String,required:true, unique:true},
    password:{type:String, required:true}
});

export const userModel = mongoose.model(usersCollection,usersSchema);