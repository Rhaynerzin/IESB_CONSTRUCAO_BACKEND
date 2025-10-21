// Importar dependências
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

// Criar app Express
const app = express();
app.use(express.json());

// Ler variáveis de ambiente
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;
const DB_HOST = process.env.DB_HOST;
const DB_NAME = process.env.DB_NAME;
const PORT = process.env.PORT || 3000;

// Conectar ao MongoDB Atlas
const uri = `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`;

mongoose
  .connect(uri)
  .then(() => console.log('✅ Conectado ao MongoDB Atlas!'))
  .catch((err) => console.error('❌ Erro ao conectar ao MongoDB:', err));

// Modelo (Schema) de Livro
const livroSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  autor: { type: String, required: true },
  editora: { type: String, required: true },
  ano: { type: Number, required: true },
  preço: { type: Number, required: true }
});

const Livro = mongoose.model('Livro', livroSchema);

// Cadastrar livro
app.post('/livros', async (req, res) => {
  try {
    const livro = new Livro(req.body);
    const novoLivro = await livro.save();
    res.status(201).json(novoLivro);
  } catch (err) {
    res.status(400).json({ erro: 'Erro ao criar livro', detalhes: err.message });
  }
});

// Listar todos os livros
app.get('/livros', async (req, res) => {
  try {
    const livros = await Livro.find();
    res.json(livros);
  } catch (err) {
    res.status(500).json({ erro: 'Erro ao listar livros' });
  }
});

// Buscar livro por ID
app.get('/livros/:id', async (req, res) => {
  try {
    const livro = await Livro.findById(req.params.id);
    if (!livro) return res.status(404).json({ erro: 'Livro não encontrado' });
    res.json(livro);
  } catch (err) {
    res.status(400).json({ erro: 'ID inválido' });
  }
});

// Atualizar livro
app.put('/livros/:id', async (req, res) => {
  try {
    const livroAtualizado = await Livro.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    if (!livroAtualizado) return res.status(404).json({ erro: 'Livro não encontrado' });
    res.json(livroAtualizado);
  } catch (err) {
    res.status(400).json({ erro: 'Erro ao atualizar livro', detalhes: err.message });
  }
});

// Remover livro
app.delete('/livros/:id', async (req, res) => {
  try {
    const livroRemovido = await Livro.findByIdAndDelete(req.params.id);
    if (!livroRemovido) return res.status(404).json({ erro: 'Livro não encontrado' });
    res.json({ mensagem: 'Livro removido com sucesso!' });
  } catch (err) {
    res.status(400).json({ erro: 'Erro ao remover livro' });
  }
});

// Iniciar servidor
app.listen(PORT, () => console.log(`🚀 Servidor rodando em http://localhost:${PORT}`));
