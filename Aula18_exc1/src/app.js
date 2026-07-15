const express = require("express");
const cookieParser = require("cookie-parser");

const app = express();

const path = require("path");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.get("/getCookies", (req, res) => {
  res.send(req.cookies);
});

app.get("/deleteCookie", (req, res) => {
  res.clearCookie(UserCookie).send("Cookie Removido");
});

app.post("/create-cookie", (req, res) => {
  const { nome, email } = req.body;
  res.cookie("user", JSON.stringify({ nome, email }), { maxAge: 10000 });
  res.send("Cookie criado");
});

app.listen(8080, () => {
  console.log("Servidor ouvindo na porta 8080");
});
