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