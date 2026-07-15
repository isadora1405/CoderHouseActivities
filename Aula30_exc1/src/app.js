const express = require("express");
const nodemailer = require("nodemailer");

const app = express();
const transport = nodemailer.createTransport({
  service: "gmail",
  port: 587,
  auth: {
    user: "f.dutraaguiar@gmail.com",
    pass: "aakn rado fybf xueq",
  },
});

app.get("/mail", async (req, res) => {
  let result = await transport.sendMail({
    from: "f.dutraaguiar@gmail.com",
    to: "felipedutra_aguiar@hotmail.com",
    subject: "Novo email de teste Isadora",
    html: `
      <div>
        <h1>Este é um email de teste da aula 30</h1>
        <img src="cid:filhote"/>
      </div>
    `,
    attachments: [
      {
        filename: "filhote.jpg",
        path: "Aula30_exc1/src/images/filhote.jpg",
        cid: "filhote",
      },
    ],
  });
  res.send({ status: "success", result: "Email enviado!" });
});

app.listen(8080, () => {
  console.log("Servidor ouvindo na porta 8080");
});
