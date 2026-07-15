const express = require("express");
const toyRoutes = require("./router/toys-router");
const userRoutes = require("./router/user-router");

const app = express();

const PORT = 8080;

app.use(express.json());
app.use("/api/toys", toyRoutes);
app.use("/api/users", userRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
