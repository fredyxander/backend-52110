//podemos usar los callbacks para saber cuando un proceso termina.

//callback:
const notificacion = ()=>console.log("El proceso ya termino");

//funcion proceso complejo
const funcionCompleja =(callback)=>{
    //proceso que toma un tiempo
    console.log("procesando imagenes...");
    setTimeout(() => {
        //Esperando a que termine el proceso
        callback();
    }, 3000);
};

//llamado de la funcion principal
funcionCompleja(notificacion);