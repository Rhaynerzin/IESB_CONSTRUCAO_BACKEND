const mongoose = require('mongoose');

const ProjetoSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
    trim: true
  },
  descricao: {
    type: String,
    trim: true
  },
  dataInicio: {
    type: Date,
    required: true
  },
  dataFim: {
    type: Date
  },
  gerente: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Funcionario',
    required: true
  }
}, { timestamps: true });

module.exports = mongoose.model('Projeto', ProjetoSchema);