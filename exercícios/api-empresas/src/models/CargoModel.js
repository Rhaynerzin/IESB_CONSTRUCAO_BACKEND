const mongoose = require('mongoose');

const CargoSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
    trim: true
  },
  salarioBase: {
    type: Number,
    required: true,
    min: 0
  },
  departamento: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Departamento',
    required: true
  }
}, { timestamps: true });

module.exports = mongoose.model('Cargo', CargoSchema);