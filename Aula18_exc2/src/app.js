const express = require("express");
const session = require("express-session");

const app = express();

const path = require("path");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(
  session({
    secret: "exercicio2",
    resave: true,
    saveUninitialized: true,
  })
);

// Middleware para contar visitas
app.use((req, res, next) => {
  if (!req.session.visited) {
    req.session.visited = true; // Marca que já visitou
    req.session.counter = 1; // Inicializa contador de visitas
  } else {
    req.session.counter++; // Incrementa contador de visitas
  }
  next();
});

app.get("/", (req, res) => {
  if (!req.session.name) {
    // Se o nome não está definido, mostrar formulário para definir nome
    res.send(`
      <form action="/" method="post">
        <label for="name">Digite seu nome:</label>
        <input type="text" id="name" name="name">
        <button type="submit">Enviar</button>
      </form>
    `);
  } else {
    // Se o nome está definido, mostrar mensagem personalizada
    if (req.session.counter === 1) {
      res.send(`Bem-vindo, ${req.session.name}!`);
    } else {
      res.send(
        `${req.session.name}, você visitou o site ${req.session.counter} vezes.`
      );
    }
  }
});

app.post("/", (req, res) => {
  // Definir o nome do usuário na sessão
  req.session.name = req.body.name;
  req.session.visited = false; // Reinicia a flag de visita
  res.redirect("/");
});

app.listen(8080, () => {
  console.log("Servidor ouvindo na porta 8080");
});
