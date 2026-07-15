const socket = io();
Swal.fire({
    title:"Identificar",
    text:"Digite seu nome",
    input:"text",
    inputValidator: (value)=>{
        return !value && ' Você precisa digitar um nome de usuário para prosseguir'
    },
    allowOutsideClick: false
}).then(result=>{
    user=result.value;
    socket.emit('register', user);
});

chatBox.addEventListener('keyup', evt=>{
    console.log('keyup', evt.key);
    if(evt.key==="Enter"){
        if(chatBox.value.trim().length>0){
            socket.emit("message", {user:user, message: chatBox.value});
            chatBox.value="";
        }
    }
});

socket.on('userConnected', (newUser) => {
    console.log('Novo usuário conectado:', newUser);
    if (newUser !== user) {
        Swal.fire({
            text: `Novo usuário conectado: ${newUser}`,
            toast: true,
            position: "top-right"
        });
    }
});

socket.on('messageLogs', data=>{
    let log = document.getElementById('messageLogs');
    let messages = "";
    data.forEach(message => {
        messages = messages + `${message.user} diz: ${message.message}<br/>`;
    });

    log.innerHTML = messages;
})