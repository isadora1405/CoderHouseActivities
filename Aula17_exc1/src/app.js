const pessoasModel = require("./models/pessoas.model");

const mongoose = require("mongoose");

const environment = async () => {
  await mongoose.connect(
    "mongodb+srv://isadora1405:14051992i@codercluster.43rqgyi.mongodb.net/test?retryWrites=true&w=majority&appName=CoderCluster"
  );

  let countByGender = await pessoasModel.aggregate([
    {
      $group: {
        _id: "$gender",
        count: { $sum: 1 },
      },
    },
    {
      $sort: {
        count: -1, // Opcional: ordenar por contagem decrescente
      },
    },
  ]);

  console.log("Contagem por gênero:", countByGender);

  // Segunda consulta: ordenar por first_name e last_name
  let sortedPeople = await pessoasModel.aggregate([
    {
      $sort: {
        first_name: 1,
        last_name: -1,
      },
    },
  ]);

  console.log("Pessoas ordenadas por first_name e last_name:", sortedPeople);
};

environment();
