console.log("home js")
const socketClient = io();

socketClient.on("messageServer",(data)=>{
    console.log(data)
    setTimeout(() => {
        socketClient.emit("messageClient","confirmacion recibida")
    }, 5000);
});

