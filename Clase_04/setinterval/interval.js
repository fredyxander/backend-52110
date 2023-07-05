const contador = (tarea,callback)=>{
    let counter=1;
    console.log(`Iniciando ${tarea}`);
    let interval = setInterval(() => {
        console.log("counter", counter);
        counter++;
        if(counter>5){
            clearInterval(interval);
            callback(tarea);
        }
    }, 1000);//1s
};

const notificacion = (tarea)=>console.log(`Termino ${tarea}`);

console.log("inicia el programa");
console.log("tarea 1");
console.log("tarea 2");
contador("tarea 3", notificacion);
console.log("fin del programa");

//output
// inicia el programa
// tarea 1
// tarea 2
// Iniciando tarea 3
// fin del programa
// counter 1
// counter 2
// counter 3
// counter 4
// counter 5
// Termino tarea 3