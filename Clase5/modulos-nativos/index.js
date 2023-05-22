const fs = require("fs");
const crypto = require("crypto");

class UserManager{
    #secret = "claveSecreta";
    constructor(path){
        this.path = path;
    }

    async createUser(user){
        try {
            const newUser = {
                email:user.email,
                password:crypto.createHmac("sha256",this.#secret).update(user.password).digest('hex')
                //secret:Es la clave que usó para crear la encriptación, sin la clave no será posible saber cuál era el texto original.
                //sha256: El argoritmo matematico que usa cripto para desencriptar
                //con update definimos qué palabra queremos encriptar.
                //digest: define la salida del dato encriptado-texto en hexadecimal
            }
            if(fs.existsSync(this.path)){
                const contenido = await fs.promises.readFile(this.path,"utf-8");
                const users = JSON.parse(contenido);
                users.push(newUser);
                await fs.promises.writeFile(this.path,JSON.stringify(users,null, 2));
            } else {
                await fs.promises.writeFile(this.path,JSON.stringify([newUser],null, 2));
            }
        } catch (error) {
            throw new Error("error al crear el usuario");
        }
    };

    async validateUser(){};
};


const managerUsuarios = new UserManager("usuarios.json");
const operaciones = async()=>{
    try {
        await managerUsuarios.createUser({email:"pepe@gmail.com", password:"1234"});
        await managerUsuarios.createUser({email:"juan@gmail.com", password:"2222"});
    } catch (error) {
        console.log(error);
    }
}
operaciones();