const socketClient = io();

const chatEmail = document.getElementById("chatEmail");
const chatInput = document.getElementById("chatInput");
const sendMessage = document.getElementById("sendMessage");
const msgContainer = document.getElementById("msgContainer");

sendMessage.addEventListener("click",()=>{
    socketClient.emit("message",{
        user:chatEmail.value,
        message:chatInput.value
    });
    chatInput.value = "";
});

socketClient.on("msgHistory",(data)=>{
    console.log("data", data);
    data.forEach(element => {
        const parrafo = document.createElement("p");
        parrafo.innerHTML = `user: ${element.user} >> message: ${element.message}`;
        msgContainer.appendChild(parrafo);
    });
});