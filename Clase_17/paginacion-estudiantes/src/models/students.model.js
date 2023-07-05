import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const stundentsCollection = "students";

const studentSchema = new mongoose.Schema({
    first_name:String,
    last_name:String,
    email:String,
    gender:String,
    grade:Number,
    course:String
});

studentSchema.plugin(mongoosePaginate);

export const studentsModel = mongoose.model(stundentsCollection,studentSchema);