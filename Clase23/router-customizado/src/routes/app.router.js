import {Router} from "express";
import jwt from "jsonwebtoken";

class AppRouter{
    #router;

    constructor(){
        //inicializando nuestro router
        this.#router = Router();
        this.init();
    };

    getRouter(){
        //metodo va a retornar neustro router
        return this.#router;
    };

    init(){
        //uso de metodos dentro de otras clases
    };

    //Ahora con este nuevo router,los metodos get,post,etc, pueden trabjar con el path de la ruta y con el callback.
    get(path, policies ,...callbacks){
        this.#router.get(path, this.#handlePolicies(policies) , this.#addCustomResponses ,this.#applyCallbacks(callbacks));
    };
    post(path, policies ,...callbacks){
        this.#router.post(path, this.#handlePolicies(policies),this.#addCustomResponses,this.#applyCallbacks(callbacks));
    };
    put(path,policies, ...callbacks){
        this.#router.put(path, this.#handlePolicies(policies),this.#addCustomResponses,this.#applyCallbacks(callbacks));
    };
    delete(path,policies, ...callbacks){
        this.#router.delete(path, this.#handlePolicies(policies),this.#addCustomResponses,this.#applyCallbacks(callbacks));
    };

    // router.get("",(req,res)=>{})
    #applyCallbacks(callbacks){
        //mapeamos los callbacks, para obtener los parametros de cada callback
        return callbacks.map((callback)=>async(...params)=>{//params["req","res","next"]
            try {
                //apply va a procesar cada callback
                //this,hace referencia a un router de la aplicacion (usersRouter,petRouter,productsRouter)
                //params,los parametros de cada callback (req,res,next)
                await callback.apply(this,params);
            } catch (error) {
                console.log("applyCallbacks",error)
                //res.json({});
                params[1].status(500).send(error);
            }
        })
    };

    #addCustomResponses(req,res,next){
        res.sendSuccess = (payload)=>res.json({status:"success", payload});
        res.sendServerError = (error)=>res.status(500).json({status:"error", error:error.message});
        res.sendClientError = (error)=>res.status(400).json({status:"error", error:error.message});
        next();
    };

    //funcion para validar los roles de usuarios y permisos
    #handlePolicies(roles){//roles que tienen acceso a la ruta
        return (req,res,next)=>{
            if(roles.includes("PUBLIC")){
                next();//cualquiera puede acceder
            };
            const tokenHeader = req.headers["authorization"]; //"Authorization": "Bearer <token>"
            if(!tokenHeader){
                return res.status(401).json({status:"error", message:"autenticacion invalida"});
            };
            //extrael token del encabezado
            const token = tokenHeader.split(" ")[1];
            const user = jwt.verify(token,"ClaveSecretaToken");
            //verficiamos si el rol del usuario esta dentro de los roles permitidos por la ruta
            if(!roles.includes(user.role.toUpperCase())){
                return res.status(403).json({status:"error", message:"autenticacion invalida"});
            }
            req.user=user;
            next();
        }
    }

};

export {AppRouter}