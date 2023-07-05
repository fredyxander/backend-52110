const fs = require("fs");

const rutaArchivo="package.json";
const operacionesAsincronas = async()=>{
    try {
        //leer el archivo package.json
        const contenido = await fs.promises.readFile(rutaArchivo,"utf-8");
        // console.log("contenido: ", contenido);
        const info = {
            contenidoStr: contenido,
            contenidoObj: JSON.parse(contenido),
            size: `${fs.statSync(rutaArchivo).size} bytes`
        };
        //escritura de archivo
        await fs.promises.writeFile("info.json",JSON.stringify(info,null,2));
        console.log("Archivo info.json escrito");
    } catch (error) {
        console.log(`Hubo un error ${error.message}`);
    }
};
operacionesAsincronas()