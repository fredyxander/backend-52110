import mongoose from "mongoose";

const stundentsCollection = "students";

const studentSchema = new mongoose.Schema({
    first_name:String,
    last_name:String,
    email:String,
    gender:String,
    grade:Number,
    course:String
});

export const studentsModel = mongoose.model(stundentsCollection,studentSchema);