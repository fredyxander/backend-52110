process.on("exit", ()=>{
    console.log("Termino el proceso");
});

console.log("inicia programa")
setTimeout(() => {
    console.log("timeout finalizado");
}, 5000);