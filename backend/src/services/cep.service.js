const fetch = require("node-fetch");

async function buscarCEP(cep) {
  const cleanCep = cep.replace(/\D/g, "");

  const response = await fetch(`https://viacep.com.br/ws/${cleanCep}/json/`);
  const data = await response.json();

  if (data.erro) {
    throw new Error("CEP inválido");
  }

  return data;
}

module.exports = { buscarCEP };
