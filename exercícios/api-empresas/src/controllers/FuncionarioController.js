const Funcionario = require('../models/FuncionarioModel');
const { createSchema, updateSchema } = require('../validators/FuncionarioValidator');

module.exports = {
  async create(req, res) {
    try {
      await createSchema.validate(req.body, { abortEarly: false });
      const funcionario = await Funcionario.create(req.body);
      res.status(201).json(funcionario);
    } catch (err) {
      res.status(400).json({ erro: err.errors || err.message });
    }
  },

  async index(req, res) {
    try {
      const funcionarios = await Funcionario.find()
        .populate('cargo')
        .populate('departamento');
      res.json(funcionarios);
    } catch (err) {
      res.status(500).json({ erro: err.message });
    }
  },

  async show(req, res) {
    try {
      const funcionario = await Funcionario.findById(req.params.id)
        .populate('cargo')
        .populate('departamento');
      if (!funcionario) return res.status(404).json({ erro: 'Funcionário não encontrado' });
      res.json(funcionario);
    } catch (err) {
      res.status(400).json({ erro: err.message });
    }
  },

  async update(req, res) {
    try {
      await updateSchema.validate(req.body, { abortEarly: false });
      const funcionario = await Funcionario.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!funcionario) return res.status(404).json({ erro: 'Funcionário não encontrado' });
      res.json(funcionario);
    } catch (err) {
      res.status(400).json({ erro: err.errors || err.message });
    }
  },

  async remove(req, res) {
    try {
      const funcionario = await Funcionario.findByIdAndDelete(req.params.id);
      if (!funcionario) return res.status(404).json({ erro: 'Funcionário não encontrado' });
      res.json({ mensagem: 'Funcionário removido com sucesso' });
    } catch (err) {
      res.status(400).json({ erro: err.message });
    }
  }
};