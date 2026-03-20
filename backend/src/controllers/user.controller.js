const { validarCPF } = require("../services/cpf.service");
const { buscarCEP } = require("../services/cep.service");

exports.createUser = async (req, res) => {
  try {
    const { nome, cpf, cep } = req.body;

    if (!nome || !cpf || !cep) {
      return res.status(400).json({ erro: "Nome, CPF e CEP são obrigatórios" });
    }

    // 🔐 valida CPF
    if (!validarCPF(cpf)) {
      return res.status(400).json({ erro: "CPF inválido" });
    }

    // 📦 busca CEP
    const endereco = await buscarCEP(cep);

    const usuario = {
      nome,
      cpf,
      endereco: {
        rua: endereco.logradouro,
        bairro: endereco.bairro,
        cidade: endereco.localidade,
        estado: endereco.uf,
      },
    };

    return res.status(201).json({
      mensagem: "Usuário criado com sucesso 🚀",
      usuario,
    });
  } catch (error) {
    return res.status(500).json({
      erro: error.message,
    });
  }
};
