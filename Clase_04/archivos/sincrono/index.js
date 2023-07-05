//importar el modulo
const fs = require("fs");

const rutaArchivo="ejemplo.txt";
//escribir un archivo
fs.writeFileSync(rutaArchivo,"Primer texto en un archivo coder");

//verificar si un archivo existe
const existe1 = fs.existsSync(rutaArchivo);
console.log("existe1",existe1);
const existe2 = fs.existsSync("noexisto.txt");
console.log("existe2", existe2);

//lectura de archivo
const contenido = fs.readFileSync(rutaArchivo,"utf-8");
console.log("contenido: ", contenido);

//lectura de archivo que no exista
try {
    const contenido2 = fs.readFileSync("noexisto.txt","utf-8");
    console.log("contenido2: ", contenido2);
} catch (error) {
    console.log(error);
}

//eliminar el archivo
try {
    fs.unlinkSync(rutaArchivo);
    console.log("archivo eliminado");
} catch (error) {
    console.log(error);
}