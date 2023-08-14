import mongoose from "mongoose";

const usersCollection = "users";

const usersSchema = new mongoose.Schema({
    first_name:{
        required:true,
        type:String
    },
    email:{
        required:true,
        type:String,
    },
    password:{
        required:true,
        type:String
    },
});

export const UserModel = mongoose.model(usersCollection,usersSchema);