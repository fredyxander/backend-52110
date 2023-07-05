import mongoose from "mongoose";

const usersCollection = "users";

const usersSchema = new mongoose.Schema({
    first_name:{type:String,required:true},
    last_name:{type:String,required:false},
    age:{type:Number,required:false},
    email:{type:String,required:true, unique:true},
    password:{type:String, required:true}
});

export const userModel = mongoose.model(usersCollection,usersSchema);