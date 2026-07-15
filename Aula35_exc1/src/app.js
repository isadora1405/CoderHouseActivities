import express from "express";
import cluster from "cluster";
import os from "os";

if (cluster.isPrimary) {
  const numCPUs = os.cpus().length;
  console.log(`Número de CPUs disponíveis: ${numCPUs}`);
  console.log(`PID do processo master: ${process.pid}`);

  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on("exit", (worker, code, signal) => {
    console.log(
      `Worker ${worker.process.pid} morreu. Código: ${code}, Sinal: ${signal}`
    );
    console.log("Criando um novo worker...");
    cluster.fork();
  });
} else {
  // Código que será executado pelos workers
  const app = express();

  app.get("/", (req, res) => {
    res.send(`Processo Worker ${process.pid} está servindo a requisição!`);
  });

  app.listen(3000, () => {
    console.log(`Worker ${process.pid} iniciou o servidor!`);
  });
}
