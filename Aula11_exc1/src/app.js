const express = require('express');
const handlebars = require('express-handlebars');
const routes = require('./routes/view.router.js');
const {Server} = require('socket.io');

const app = express();
const port = 8080;

const httpServer = app.listen(port, ()=>{`Servidor ouvindo na porta ${port}`});

const io = new Server(httpServer);

app.engine('handlebars', handlebars.engine());
app.use('/', routes);
app.use(express.static(__dirname+'/public'));
app.set('views', __dirname+'/views');
app.set('view engine', 'handlebars');

let messages = [];
let users = [];

io.on('connection', (socket) => {
    console.log('teste', socket.id)
    let user = '';

    socket.on('register', (username) => {
        
        user = username;
        users.push({ id: socket.id, name: user });
        // Envia todas as mensagens anteriores para o novo usuário
        socket.emit('messageLogs', messages);
        // Notifica todos os outros usuários sobre a nova conexão
        console.log(`Novo usuário registrado: ${user}`);
        socket.broadcast.emit('userConnected', user);
       
    });

    socket.on('disconnect', () => {
        users = users.filter(u => u.id !== socket.id);
    });

    socket.on('message', (data) => {
        messages.push(data);
        io.emit('messageLogs', messages);
    });
});