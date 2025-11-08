const Departamento = require('../models/DepartamentoModel');
const { createSchema, updateSchema } = require('../validators/DepartamentoValidator');

module.exports = {
  async create(req, res) {
    try {
      await createSchema.validate(req.body, { abortEarly: false });
      const departamento = await Departamento.create(req.body);
      res.status(201).json(departamento);
    } catch (err) {
      res.status(400).json({ erro: err.errors || err.message });
    }
  },

  async index(req, res) {
    try {
      const departamentos = await Departamento.find();
      res.json(departamentos);
    } catch (err) {
      res.status(500).json({ erro: err.message });
    }
  },

  async show(req, res) {
    try {
      const departamento = await Departamento.findById(req.params.id);
      if (!departamento) return res.status(404).json({ erro: 'Departamento não encontrado' });
      res.json(departamento);
    } catch (err) {
      res.status(400).json({ erro: err.message });
    }
  },

  async update(req, res) {
    try {
      await updateSchema.validate(req.body, { abortEarly: false });
      const departamento = await Departamento.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!departamento) return res.status(404).json({ erro: 'Departamento não encontrado' });
      res.json(departamento);
    } catch (err) {
      res.status(400).json({ erro: err.errors || err.message });
    }
  },

  async remove(req, res) {
    try {
      const departamento = await Departamento.findByIdAndDelete(req.params.id);
      if (!departamento) return res.status(404).json({ erro: 'Departamento não encontrado' });
      res.json({ mensagem: 'Departamento removido com sucesso' });
    } catch (err) {
      res.status(400).json({ erro: err.message });
    }
  }
};