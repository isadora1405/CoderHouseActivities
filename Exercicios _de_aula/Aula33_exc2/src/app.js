const express = require("express");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Testando o yarn");
});

app.listen(8080, () => {
  console.log("Servidor ouvindo na porta 8080");
});
