import express from "express";
import handlebars from "express-handlebars";
import mongoose from "mongoose";
import path from "path";
import { studentModel } from "./models/student.model.js";
import {__dirname} from "./utils.js";

const app= express();
const PORT = 8080;

const studentsDB = [
    {"first_name":"Justino","last_name":"Fidgin","email":"jfidgin0@boston.com","gender":"Male","grade":6,"group":"1B"},
    {"first_name":"Ketty","last_name":"Robson","email":"krobson1@prlog.org","gender":"Female","grade":10,"group":"2A"},
    {"first_name":"Dierdre","last_name":"Barron","email":"dbarron2@dailymail.co.uk","gender":"Female","grade":9,"group":"1B"},
    {"first_name":"Nana","last_name":"Pellew","email":"npellew3@nytimes.com","gender":"Female","grade":6,"group":"1A"},
    {"first_name":"Shannan","last_name":"Preshous","email":"spreshous4@paginegialle.it","gender":"Male","grade":8,"group":"2B"},
    {"first_name":"Mark","last_name":"Yurchishin","email":"iyurchishin5@google.it","gender":"Male","grade":10,"group":"2B"},
    {"first_name":"Tannie","last_name":"Takkos","email":"ttakkos6@mtv.com","gender":"Female","grade":7,"group":"2B"},
    {"first_name":"Debbi","last_name":"Eddowis","email":"deddowis7@jigsy.com","gender":"Female","grade":6,"group":"1B"},
    {"first_name":"Dugald","last_name":"Toun","email":"dtoun8@java.com","gender":"Male","grade":4,"group":"1A"},
    {"first_name":"Lorain","last_name":"Judkin","email":"ljudkin9@bigcartel.com","gender":"Genderqueer","grade":8,"group":"2B"},
    {"first_name":"Shelley","last_name":"Crinion","email":"scriniona@wsj.com","gender":"Genderfluid","grade":8,"group":"2A"},
    {"first_name":"Kellyann","last_name":"Doel","email":"kdoelb@merriam-webster.com","gender":"Female","grade":8,"group":"1B"},
    {"first_name":"Romona","last_name":"Derricoat","email":"rderricoatc@vkontakte.ru","gender":"Female","grade":5,"group":"1A"},
    {"first_name":"Lorine","last_name":"McVaugh","email":"lmcvaughd@unc.edu","gender":"Female","grade":4,"group":"2A"},
    {"first_name":"Ker","last_name":"Chiese","email":"kchiesee@prlog.org","gender":"Male","grade":8,"group":"1A"},
    {"first_name":"Aloisia","last_name":"Hovie","email":"ahovief@simplemachines.org","gender":"Female","grade":8,"group":"2B"},
    {"first_name":"Marshall","last_name":"Chatten","email":"mchatteng@creativecommons.org","gender":"Male","grade":9,"group":"2B"},
    {"first_name":"Marcelo","last_name":"Rubega","email":"mrubegah@house.gov","gender":"Male","grade":6,"group":"1A"},
    {"first_name":"Yves","last_name":"Halsey","email":"yhalseyi@naver.com","gender":"Male","grade":5,"group":"2A"},
    {"first_name":"Corene","last_name":"Greed","email":"cgreedj@epa.gov","gender":"Female","grade":8,"group":"1A"}
];

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//configuracion handlebars
app.engine(".hbs", handlebars.engine({extname:".hbs"}));
app.set("views", path.join(__dirname, "/views"));
app.set("view engine", ".hbs");

app.listen(PORT,()=>console.log(`Server on port ${PORT}`));

try {
    await mongoose.connect("RUTA DE BASE DE DATOS");
    console.log("conectado a la base de datos")
} catch (error) {
    console.log(error.message)
}

//routes
app.get("/students",async(req,res)=>{
    //recibimos la pagina a mostrar
    const page = req.query.page ? parseInt(req.query.page) : 1;
    //Lean es crucial para mostrar en Handlebars, ya que evita la "hidratación" del documento de mongoose,
    //esto hace que a Handlebars llegue el documento como plain object y no como Document.
    //Agregamos un limite al paginado
    const result = await studentModel.paginate({},{
        page,
        limit:4,
        lean:true
    });
    result.isValid = result.docs.length>0 ? true : false;
    //Creamos los enlaces
    result.prevLink = result.hasPrevPage ? `http://localhost:8080/students?page=${result.prevPage}`:'';
    result.nextLink = result.hasNextPage ? `http://localhost:8080/students?page=${result.nextPage}`:'';
    console.log("result: ", result);
    res.render("students",result);
});