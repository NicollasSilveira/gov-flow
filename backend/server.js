const express = require("express");
const app = express(); // <-- ISSO estava faltando

app.get("/", (req, res) => {
  res.send("API funcionando 🚀");
});

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});