const mongoose = require("mongoose");
const pessoaCollection = "pessoas";

const pessoaSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  email: String,
  gender: String,
});

module.exports = mongoose.model(pessoaCollection, pessoaSchema);
