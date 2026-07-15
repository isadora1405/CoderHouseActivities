const config = require("./config/config");
const { Command } = require("commander");
const express = require("express");

const app = express();
const program = new Command();

program.option("--mode <mode>", "Modo de trabalho", "PRODUCTION");
program.parse();

const mode = program.opts().mode.toUpperCase(); // Captura o valor de modo e o converte para maiúsculas
config(mode); // Carrega as variáveis de ambiente

const PORT = process.env.PORT; // Define a porta a partir das variáveis de ambiente

app.get("/", (req, res) => {
  res.send("Aplicação rodando...");
});

app.listen(PORT, () => {
  console.log(`Servidor rodando no modo ${mode} na porta ${PORT}`);
});
