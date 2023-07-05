//importar fs
const fs = require("fs");

const rutaArchivo="ejemplo.txt";
//escribir un archivo
fs.writeFile(rutaArchivo,"contenido callback",(error)=>{
    if(error){
        return console.log("Error al escribir archivo");
    }
    console.log("Archivo escrito");
    //leer archivo
    fs.readFile(rutaArchivo,"utf-8",(error,contenido)=>{
        if(error){
            return console.log("Error leyendo el archivo")
        }
        console.log("contenido: ", contenido);
        //eliminar el archivo
        fs.unlink(rutaArchivo,(error)=>{
            if(error){
                return console.log("Error eliminando el archivo")
            }
            console.log("archivo eliminado");
        })
    });
});