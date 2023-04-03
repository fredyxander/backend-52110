const fs = require("fs");

const rutaArchivo="./ejemploPromesas.txt";

const operacionesAsincronas = async()=>{
    try {
        //escribir un archivo
        await fs.promises.writeFile(rutaArchivo,"contenido con promesas\n");
        console.log("archivo escrito");
        //agregar mas contenido
        await fs.promises.appendFile(rutaArchivo,"otra liena de contenido");
        console.log("archivo actualizado");
        //leer el archivo
        const contenido = await fs.promises.readFile(rutaArchivo,"utf-8");
        console.log("contenido:", contenido);
        //eliminar el archivo
        await fs.promises.unlink(rutaArchivo);
        console.log("Archivo eliminado");
    } catch (error) {
        console.log(`Hubo un error ${error.message}`);
    }
};
operacionesAsincronas()