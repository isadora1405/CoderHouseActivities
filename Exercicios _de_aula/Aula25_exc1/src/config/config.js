const dotEnv = require("dotenv");
const path = require("path");

module.exports = (environment) => {
  const envFile =
    environment === "DEVELOPMENT" ? ".env.development" : ".env.production";

  dotEnv.config({
    path: path.resolve(__dirname, `../../${envFile}`), // Garante o caminho correto do arquivo .env
  });

  return process.env; // Retorna as variáveis de ambiente carregadas
};
