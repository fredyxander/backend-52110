import express from "express";
import { connectDB } from "./config/dbConnection.js";
import { stundentsModel } from "./models/student.model.js";
import { courseModel } from "./models/course.model.js";

const port = 8080;
const app =express();

//middlewares
app.use(express.json());

app.listen(port,()=>console.log(`Server listening on port ${port}`));

connectDB();

const newStundents = [
    {first_name:"pepe", email:"pepe@gmail.com", gender:"Masculino"},
    {first_name:"laura", email:"laura@gmail.com", gender:"Femenino"},
    {first_name:"juan", email:"juan@gmail.com", gender:"Masculino"},
    {first_name:"camila", email:"camila@gmail.com", gender:"Femenino"},
]

const newCourses = [
    {title:"Javascript"},
    {title:"Nodejs"},
    {title:"html"},
    {title:"React"},
]

//routes
app.post("/createStudents", async(req,res)=>{
    try {
        const response = await stundentsModel.create(newStundents);
        res.send(response);
    } catch (error) {
        res.send(error.message)
    }
});

app.post("/createCourses", async(req,res)=>{
    try {
        const response = await courseModel.create(newCourses);
        res.send(response);
    } catch (error) {
        res.send(error.message)
    }
});

//ruta para agregar estudiantes en un curso
app.put("/addStudent", async(req,res)=>{
    try {
        const {courseId,studentId} = req.body;
        const course = await courseModel.findById(courseId);
        course.estudiantes.push(studentId);
        course.save();
        res.send("estudiante agregado")
    } catch (error) {
        res.send(error.message)
    }
});

//ruta para obtener la informacion del curso
app.get("/course/:courseId", async(req,res)=>{
    try {
        const {courseId} = req.params;
        const course = await courseModel.findById(courseId);
        res.send(course);
    } catch (error) {
        res.send(error.message)
    }
});

//ruta para obtener curso e informacion de estudiantes
app.get("/coursePopulation/:courseId", async(req,res)=>{
    try {
        const {courseId} = req.params;
        //populate("nombre_de_la_propiedad_a_popular")
        const course = await courseModel.findById(courseId).populate('estudiantes');
        res.send(course);
    } catch (error) {
        res.send(error.message)
    }
});

//ruta con populacion y middleware
app.get("/coursePre/:courseId", async(req,res)=>{
    try {
        const {courseId} = req.params;
        const course = await courseModel.findOne({_id:courseId})
        res.send(course);
    } catch (error) {
        res.send(error.message)
    }
});