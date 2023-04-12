import express from "express";

const app = express();
const port = 8080;

app.listen(port,()=>console.log(`Server listening on port ${port}`));

//Intepretacion de formato json en las peticiones
app.use(express.json());
app.use(express.urlencoded({extended:true}));

let frase = "frase inicial";

//rutas
app.get("/api/frase",(req,res)=>{
    res.json({status:"success", frase:frase});
});

app.get("/api/palabras/:pos",(req,res)=>{
    const {pos} = req.params;
    const arregloFrase = frase.split(" ");
    res.json({status:"success", buscada:arregloFrase[pos-1]});
});

app.post("/users",(req,res)=>{
});

app.put("/users/:email/:role",(req,res)=>{
});

app.delete("/users/:email",(req,res)=>{
});