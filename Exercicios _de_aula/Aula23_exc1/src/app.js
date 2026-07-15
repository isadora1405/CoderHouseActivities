// index.js
const express = require("express");
const petRouter = require("./routes/pets");

const app = express();
const port = 8080;

app.use(express.json());
app.use("/api/pets", petRouter);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
