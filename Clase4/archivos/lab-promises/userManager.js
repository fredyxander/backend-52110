const fs = require("fs");

class UserManager{
    constructor(pathName){
        this.path = pathName;
    }

    fileExists(){
        return fs.existsSync(this.path);
    }

    async getUsers(){
        try {
            //verificar que el archivo exista
            if(this.fileExists()){
                //leer el archivo
                const contenido = await fs.promises.readFile(this.path,"utf-8");
                const contenidoJson = JSON.parse(contenido);
                return contenidoJson;
            } else {
                return "El archivo no existe";
            }
        } catch (error) {
            return "hubo un error";
        }
    };

    async createUser(user){
        try {
            if(this.fileExists()){
                //leer el archivo
                //obtenemos los usuarios - reutilizando el metodo getUsers
                const users = await this.getUsers();
                users.push(user);
                //reescribimos el archivo con el nuevo usuario
                await fs.promises.writeFile(this.path,JSON.stringify(users,null,2));
                return "usuario agregado";
            } else {
                return "El archivo no existe";
            }
        } catch (error) {
            return "hubo un error";
        }
    };

    updateUser(id,user){
        //leer el archvio
        //luego convierten el formato del archivo de texo a obj js
        //buscan el producto
        //actualizan el producto.
        //reescriben el archivo con todos los productos con el producto modificado
    }
}

module.exports = {UserManager};