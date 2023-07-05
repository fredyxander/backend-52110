const temporizador = (tarea, callback)=>{
    console.log(`Iniciando ${tarea}`);
    setTimeout(() => {
        callback(tarea);
    }, 5000);//5s
};

const notificacion = (tarea)=>console.log(`Termino ${tarea}`);

console.log("inicia el programa");
console.log("tarea 1");
console.log("tarea 2");
temporizador("tarea 3", notificacion);
console.log("fin del programa");

//output
// inicia el programa
// tarea 1
// tarea 2
// Iniciando tarea 3
// fin del programa
// Termino tarea 3