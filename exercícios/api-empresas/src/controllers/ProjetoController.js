const Projeto = require('../models/ProjetoModel');
const { createSchema, updateSchema } = require('../validators/ProjetoValidator');

module.exports = {
  async create(req, res) {
    try {
      await createSchema.validate(req.body, { abortEarly: false });
      const projeto = await Projeto.create(req.body);
      res.status(201).json(projeto);
    } catch (err) {
      res.status(400).json({ erro: err.errors || err.message });
    }
  },

  async index(req, res) {
    try {
      const projetos = await Projeto.find().populate('gerente');
      res.json(projetos);
    } catch (err) {
      res.status(500).json({ erro: err.message });
    }
  },

  async show(req, res) {
    try {
      const projeto = await Projeto.findById(req.params.id).populate('gerente');
      if (!projeto) return res.status(404).json({ erro: 'Projeto não encontrado' });
      res.json(projeto);
    } catch (err) {
      res.status(400).json({ erro: err.message });
    }
  },

  async update(req, res) {
    try {
      await updateSchema.validate(req.body, { abortEarly: false });
      const projeto = await Projeto.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!projeto) return res.status(404).json({ erro: 'Projeto não encontrado' });
      res.json(projeto);
    } catch (err) {
      res.status(400).json({ erro: err.errors || err.message });
    }
  },

  async remove(req, res) {
    try {
      const projeto = await Projeto.findByIdAndDelete(req.params.id);
      if (!projeto) return res.status(404).json({ erro: 'Projeto não encontrado' });
      res.json({ mensagem: 'Projeto removido com sucesso' });
    } catch (err) {
      res.status(400).json({ erro: err.message });
    }
  }
};