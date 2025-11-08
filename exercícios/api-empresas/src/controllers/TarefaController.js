const Tarefa = require('../models/TarefaModel');
const { createSchema, updateSchema } = require('../validators/TarefaValidator');

module.exports = {
  async create(req, res) {
    try {
      await createSchema.validate(req.body, { abortEarly: false });
      const tarefa = await Tarefa.create(req.body);
      res.status(201).json(tarefa);
    } catch (err) {
      res.status(400).json({ erro: err.errors || err.message });
    }
  },

  async index(req, res) {
    try {
      const tarefas = await Tarefa.find()
        .populate('projeto')
        .populate('responsavel');
      res.json(tarefas);
    } catch (err) {
      res.status(500).json({ erro: err.message });
    }
  },

  async show(req, res) {
    try {
      const tarefa = await Tarefa.findById(req.params.id)
        .populate('projeto')
        .populate('responsavel');
      if (!tarefa) return res.status(404).json({ erro: 'Tarefa não encontrada' });
      res.json(tarefa);
    } catch (err) {
      res.status(400).json({ erro: err.message });
    }
  },

  async update(req, res) {
    try {
      await updateSchema.validate(req.body, { abortEarly: false });
      const tarefa = await Tarefa.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!tarefa) return res.status(404).json({ erro: 'Tarefa não encontrada' });
      res.json(tarefa);
    } catch (err) {
      res.status(400).json({ erro: err.errors || err.message });
    }
  },

  async remove(req, res) {
    try {
      const tarefa = await Tarefa.findByIdAndDelete(req.params.id);
      if (!tarefa) return res.status(404).json({ erro: 'Tarefa não encontrada' });
      res.json({ mensagem: 'Tarefa removida com sucesso' });
    } catch (err) {
      res.status(400).json({ erro: err.message });
    }
  }
};