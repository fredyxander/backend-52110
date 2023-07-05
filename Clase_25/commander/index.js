import { Command } from "commander";

const program = new Command(); //inicializar un programa de commander

//especificamos las opciones de program
program
.option("-p <port>","puerto del servidor",3000)
.option("--mode <mode>","mode trabajo del servidor","development")
.requiredOption("-u <user>","usuario con permisos para ejecutar la aplicacion","No se ha indicado un usuario");

program.parse();
const argumentos = program.opts()
console.log("argumentos", argumentos);

let secretSession;
if(argumentos.mode === "development"){
    secretSession = "sessionDevelopment"
} else {
    secretSession = "sessionProduction"
}
console.log("secretSession",secretSession)