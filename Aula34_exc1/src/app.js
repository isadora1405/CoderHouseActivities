import express from "express";
import { addLogger } from "./utils/logger.js";
import dotenv from "dotenv";

// Carregar variáveis de ambiente do .env
dotenv.config();

const app = express();

app.use(addLogger);

app.get("/", (req, res) => {
  req.logger.warn("Mensagem de alerta!!");
  res.send({ message: "Mensagem do logger" });
});

app.listen(8080, () => {
  console.log(`Ouvindo na porta 8080 - Ambiente: ${process.env.NODE_ENV}`);
});
