const Cargo = require('../models/CargoModel');
const { createSchema, updateSchema } = require('../validators/CargoValidator');

module.exports = {
  async create(req, res) {
    try {
      await createSchema.validate(req.body, { abortEarly: false });
      const cargo = await Cargo.create(req.body);
      res.status(201).json(cargo);
    } catch (err) {
      res.status(400).json({ erro: err.errors || err.message });
    }
  },

  async index(req, res) {
    try {
      const cargos = await Cargo.find().populate('departamento');
      res.json(cargos);
    } catch (err) {
      res.status(500).json({ erro: err.message });
    }
  },

  async show(req, res) {
    try {
      const cargo = await Cargo.findById(req.params.id).populate('departamento');
      if (!cargo) return res.status(404).json({ erro: 'Cargo não encontrado' });
      res.json(cargo);
    } catch (err) {
      res.status(400).json({ erro: err.message });
    }
  },

  async update(req, res) {
    try {
      await updateSchema.validate(req.body, { abortEarly: false });
      const cargo = await Cargo.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!cargo) return res.status(404).json({ erro: 'Cargo não encontrado' });
      res.json(cargo);
    } catch (err) {
      res.status(400).json({ erro: err.errors || err.message });
    }
  },

  async remove(req, res) {
    try {
      const cargo = await Cargo.findByIdAndDelete(req.params.id);
      if (!cargo) return res.status(404).json({ erro: 'Cargo não encontrado' });
      res.json({ mensagem: 'Cargo removido com sucesso' });
    } catch (err) {
      res.status(400).json({ erro: err.message });
    }
  }
};