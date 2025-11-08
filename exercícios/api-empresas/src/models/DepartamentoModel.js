const mongoose = require('mongoose');

const DepartamentoSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  sigla: { type: String, required: true },
});

module.exports = mongoose.model('Departamento', DepartamentoSchema);