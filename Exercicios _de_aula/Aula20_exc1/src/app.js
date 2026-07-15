const express = require("express");
const session = require("express-session");
const mongoose = require("mongoose");
const handlebars = require("express-handlebars");
const sessionRouter = require("./routes/sessionRoutes.js");
const userRouter = require("./routes/userRoutes.js");

const app = express();

app.engine("handlebars", handlebars.engine());
app.set("view engine", "handlebars");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  session({
    secret: "AlunosCoderHouse",
    resave: false,
    saveUninitialized: false,
  })
);

mongoose.connect(
  "mongodb+srv://isadora1405:14051992i@codercluster.43rqgyi.mongodb.net/test?retryWrites=true&w=majority&appName=CoderCluster",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

app.use("/", userRouter);
app.use("/api/sessions", sessionRouter);
app.set("views", __dirname + "/views");

app.listen(8080, () => {
  console.log("Servidor ouvindo na porta 8080");
});
