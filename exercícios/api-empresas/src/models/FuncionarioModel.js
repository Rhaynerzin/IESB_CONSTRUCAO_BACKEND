const mongoose = require('mongoose');

const FuncionarioSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  },
  telefone: {
    type: String,
    trim: true
  },
  cargo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Cargo',
    required: true
  },
  departamento: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Departamento',
    required: true
  }
}, { timestamps: true });

module.exports = mongoose.model('Funcionario', FuncionarioSchema);