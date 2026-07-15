const express = require('express');
const handlebars = require('express-handlebars');

const app = express();

app.engine('handlebars', handlebars.engine());
app.set('views',__dirname+'/views');
app.set('view engine', 'handlebars');

app.use(express.static(__dirname+'/public'))

app.get('/', (req, res)=>{
    let users = [
        {
            name:"João",
            last_name:"Marcelo",
            age:36,
            email:"joaomarcelo@email.com",
            phone:58986475213
        },
        {
            name:"José",
            last_name:"Silva",
            age:51,
            email: "josesilva@email.com",
            phone:97965412587
        },
        {
            name:"Maria",
            last_name:"Rocha",
            age:38,
            email:"mariarocha@email.com",
            phone:51879524613
        },
        {
            name:"João",
            last_name:"Fulano",
            age:40,
            email:"joaofulano@email.com",
            phone:23587489651
        },
        {
            name:"Laura",
            last_name:"Santos",
            age: 30,
            email:"laurasantos@email.com",
            phone:548796541265
        }
        
    ]

    let randomIndex = Math.floor(Math.random() * users.length);
    let randomUser = users[randomIndex];

    res.render('index', randomUser);
})

app.listen(8080,() => console.log("Listen on port 8080"))