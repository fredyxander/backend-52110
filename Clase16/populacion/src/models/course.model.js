import mongoose from "mongoose";

const courseCollection = "courses";

const courseSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    estudiantes:{
        type:[
            {
                type:mongoose.Schema.Types.ObjectId,
                ref:"students" //referencia a la coleccion students
            }
        ],
        default:[]
    }
});

courseSchema.pre(["find","findOne"],function(next){
    // populate("nombre_de_la_propiedad_a_popular")
    this.populate("estudiantes");
    next();
});

export const courseModel = mongoose.model(courseCollection, courseSchema);