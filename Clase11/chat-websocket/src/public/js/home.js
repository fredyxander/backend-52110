console.log("home view js");

const socketClient = io();

let user;

let chatBox = document.getElementById("chatBox");
let messageLogs = document.getElementById("messageLogs");

Swal.fire({
    title:"Ingresa tu nombre de usuario",
    input:"text",
    text:"Ingresa tu nombre de usuario para utilizar el chat",
    inputValidator:(value)=>{
        if(!value){
            return "Este campo es obligatorio para usar el chat"
        }
    },
    allowOutsideClick:false,
}).then(result=>{
    user=result.value;
    socketClient.emit("authenticated",{user:user,message:"conectado"});
});

chatBox.addEventListener("keyup",(evt)=>{
    if(evt.key === "Enter"){
        // console.log(chatBox.value.trim())
        if(chatBox.value.trim().length>0){
            socketClient.emit("message",{user:user, message:chatBox.value});
            chatBox.value="";
        }
    }
});

socketClient.on("messageChat",(data)=>{
    console.log(data);
    let messagesElements= "";
    data.forEach(itemMsg=>{
        messagesElements = messagesElements + `${itemMsg.user}: ${itemMsg.message} <br/>`;
    });
    messageLogs.innerHTML=messagesElements;
});

socketClient.on("newUser",(serverMsg)=>{
    if(user){
        Swal.fire({
            text:serverMsg,
            toast:true,
            position:"top-right"
        });
    }
});