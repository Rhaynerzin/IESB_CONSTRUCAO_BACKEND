const mongoose = require('mongoose');

const TarefaSchema = new mongoose.Schema({
  titulo: {
    type: String,
    required: true,
    trim: true
  },
  descricao: {
    type: String,
    trim: true
  },
  status: {
    type: String,
    enum: ['Pendente', 'Em andamento', 'Concluída'],
    default: 'Pendente'
  },
  prazo: {
    type: Date
  },
  projeto: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Projeto',
    required: true
  },
  responsavel: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Funcionario',
    required: true
  }
}, { timestamps: true });

module.exports = mongoose.model('Tarefa', TarefaSchema);