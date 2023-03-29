//crear el callback
const notificacion = ()=>console.log("El proceso ya termino");


//funcion procesar imagenes
const procesarImagenes = (callbackFuncion)=>{
    //instrucciones de la funcion
    console.log("iniciando procesamiento...");
    setTimeout(() => {
        callbackFuncion();
    }, 5000);
}

//llamado funcion principal
procesarImagenes(notificacion);