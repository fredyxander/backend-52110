import express from "express";

const app = express();
const port = 8080;

app.listen(port,()=>console.log(`Server listening on port ${port}`));

//Intepretacion de formato json en las peticiones
app.use(express.json());
app.use(express.urlencoded({extended:true}));

let users = [];

//rutas
app.get("/users",(req,res)=>{
    res.status(200).json({status:"success",data:users});
});

app.post("/users",(req,res)=>{
    const user = req.body;
    console.log("user: ", user);
    if(!user.email || !user.password){
        return res.status(400).json({status:"error", message:"Datos incompletos"})
    }
    users.push(user);
    res.json({status:"success",message:"usuario creado", data:user});
});

app.put("/users/:email/:role",(req,res)=>{
    //capturamos el parametro
    // const email = req.params.email;
    // const role = req.params.role;
    const {email,role} = req.params;
    //capturar informacion de los datos modificados
    const newData = req.body;
    console.log(email);
    console.log(newData)
    const userIndex = users.findIndex(u=>u.email === email);
    if(userIndex<0){
        return res.status(400).json({status:"error", message:"El usuario no existe"});
    }
    if(!newData.email || !newData.password){
        return res.status(400).json({status:"error", message:"Datos incompletos"});
    }
    users[userIndex] = newData;
    res.json({status:"success",message:"usuario actualizado", data:users[userIndex]});
});

app.delete("/users/:email",(req,res)=>{
    const {email} = req.params;
    const userIndex = users.findIndex(u=>u.email === email);
    if(userIndex<0){
        return res.status(400).json({status:"error", message:"El usuario no existe"});
    }
    users.splice(userIndex,1);
    res.json({status:"sucess", message:"usuario eliminado"});
});