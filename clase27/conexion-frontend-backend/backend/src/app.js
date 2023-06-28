import express from "express";
import cors from "cors";

const port = 8080;
const app = express();

//middleware
app.use(express.json());
app.use(cors({
    origin:"http://127.0.0.1:5500"
}));

app.listen(port,()=>console.log(`Server listening on port ${port}`));

const users = [
    {
        name:"pepe",
        email:"pepe@gmail.com"
    },
    {
        name:"juan",
        email:"juan@gmail.com"
    },
];

app.get("/users", (req,res)=>{
    res.json({status:"success", data: users});
});