const express = require('express');
const app = express();

// Importa o router da calculadora
const calculadoraRouter = require('./routes/calculadora');

// Usa o router com prefixo /calculadora
app.use('/calculadora', calculadoraRouter);

// Inicia o servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:3000`);
});
