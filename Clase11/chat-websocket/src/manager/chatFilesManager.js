import path from "path";
import {__dirname} from "../utils.js";
import fs from "fs";

class ChatFilesManager{
    constructor(pathName){
        this.path = path.join(__dirname,`/files/${pathName}`)
    }

    async save(msgObject){
        try {
            const contenido = await fs.promises.readFile(this.path,"utf-8");
            const messages = JSON.parse(contenido);
            messages.push(msgObject);
            await fs.promises.writeFile(this.path,JSON.stringify(messages,null,2));
        } catch (error) {
            console.log(error.message);
        }
    };

    async getMessages(){
        try {
            const contenido = await fs.promises.readFile(this.path,"utf-8");
            const messages = JSON.parse(contenido);
            return messages;
        } catch (error) {
            console.log(error.message);
        }
    };
}

export {ChatFilesManager}