const http = require("http");

//gestion de solicitudes
const server = http.createServer((request,response)=>{
    console.log("request: ", request)
    response.end("soy un servidor ejecutandose con nodemon, hicimos un cambio, coderhouse");
});

const port = 3000;

server.listen(port,()=>console.log(`Servidor ejecutandose en el puerto ${port}`));