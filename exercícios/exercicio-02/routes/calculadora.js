const express = require('express');
const router = express.Router();

// Função auxiliar para validar números
function validarNumero(valor) {
  return !isNaN(valor) && valor !== null;
}

// Soma
router.get('/somar', (req, res) => {
  const numA = Number(req.query.numA);
  const numB = Number(req.query.numB);

  if (!validarNumero(numA) || !validarNumero(numB)) {
    return res.status(400).json({ erro: "Parâmetros inválidos" });
  }

  const resultado = numA + numB;
  console.log(resultado); // Mostra só o resultado no terminal
  res.json({ resultado });
});

// Subtração
router.get('/subtrair', (req, res) => {
  const numA = Number(req.query.numA);
  const numB = Number(req.query.numB);

  if (!validarNumero(numA) || !validarNumero(numB)) {
    return res.status(400).json({ erro: "Parâmetros inválidos" });
  }

  const resultado = numA - numB;
  console.log(resultado);
  res.json({ resultado });
});

// Multiplicação
router.get('/multiplicar', (req, res) => {
  const numA = Number(req.query.numA);
  const numB = Number(req.query.numB);

  if (!validarNumero(numA) || !validarNumero(numB)) {
    return res.status(400).json({ erro: "Parâmetros inválidos" });
  }

  const resultado = numA * numB;
  console.log(resultado);
  res.json({ resultado });
});

// Divisão
router.get('/dividir', (req, res) => {
  const numA = Number(req.query.numA);
  const numB = Number(req.query.numB);

  if (!validarNumero(numA) || !validarNumero(numB)) {
    return res.status(400).json({ erro: "Parâmetros inválidos" });
  }

  if (numB === 0) {
    return res.status(400).json({ erro: "Divisão por zero não permitida" });
  }

  const resultado = numA / numB;
  console.log(resultado);
  res.json({ resultado });
});

// Quadrado
router.get('/quadrado', (req, res) => {
  const numA = Number(req.query.numA);

  if (!validarNumero(numA)) {
    return res.status(400).json({ erro: "Parâmetro inválido" });
  }

  const resultado = numA * numA;
  console.log(resultado);
  res.json({ resultado });
});

// Raiz quadrada
router.get('/raiz', (req, res) => {
  const numA = Number(req.query.numA);

  if (!validarNumero(numA)) {
    return res.status(400).json({ erro: "Parâmetro inválido" });
  }

  if (numA < 0) {
    return res.status(400).json({ erro: "Não é possível calcular raiz de número negativo" });
  }

  const resultado = Math.sqrt(numA);
  console.log(resultado);
  res.json({ resultado });
});

module.exports = router;
