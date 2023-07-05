import {Router} from "express";

const router = Router();

//middleware de router: Aplica para todas las peticiones del router de mascotas
const middlewareRouter = (req,res,next)=>{
    console.log("soy el middleware del router pets");
    req.location="lima";
    next();
};

router.use(middlewareRouter);

//middleware de enpoint especifico
const middlewarePermiso = (req,res,next)=>{
    console.log("middleware de enpoint");
    if(req.query.role === "admin"){
        next();
    } else {
        res.status(400).json({status:"error", message:"no tienes permisos"});
    }
};

let pets = [];

//rutas de mascotas
router.get("/", middlewarePermiso ,(req,res)=>{
    console.log("req: ", req.location);
    res.json({status:"success", data:pets});
});

//ruta para crear usuario
router.post("/",(req,res)=>{
    const newPet = req.body;
    console.log("newPet: ", newPet);
    pets.push(newPet);
    res.json({status:"success",message:"mascota creada"});
});

export {router as PetRouter}