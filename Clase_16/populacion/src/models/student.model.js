import mongoose from "mongoose";

const stundentCollection = "students";

const studentSchema = new mongoose.Schema({
    first_name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        index:true
    },
    gender:{
        type:String,
        required:true
    }
});

export const stundentsModel = mongoose.model(stundentCollection,studentSchema);