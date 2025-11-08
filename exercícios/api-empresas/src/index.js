require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Controllers
const DepartamentoController = require('./controllers/DepartamentoController');
const CargoController = require('./controllers/CargoController');
const FuncionarioController = require('./controllers/FuncionarioController');
const ProjetoController = require('./controllers/ProjetoController');
const TarefaController = require('./controllers/TarefaController');

const app = express();
app.use(cors());
app.use(express.json());

// Configurações do banco
const { DB_USER, DB_PASS, DB_HOST, DB_NAME, PORT } = process.env;
if (!DB_USER || !DB_PASS || !DB_HOST || !DB_NAME) {
  console.error('⚠️  Variáveis de ambiente do banco não configuradas. Verifique o arquivo .env.');
  process.exit(1);
}

const uri = `mongodb+srv://${encodeURIComponent(DB_USER)}:${encodeURIComponent(DB_PASS)}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`;

mongoose
  .connect(uri)
  .then(() => console.log('✅ Conectado ao MongoDB Atlas'))
  .catch(err => console.error('❌ Erro ao conectar no MongoDB:', err.message));

// ------------------ DEPARTAMENTO ------------------
app.post('/api/departamentos', DepartamentoController.create);
app.get('/api/departamentos', DepartamentoController.index);
app.get('/api/departamentos/:id', DepartamentoController.show);
app.put('/api/departamentos/:id', DepartamentoController.update);
app.delete('/api/departamentos/:id', DepartamentoController.remove);

// ------------------ CARGO ------------------
app.post('/api/cargos', CargoController.create);
app.get('/api/cargos', CargoController.index);
app.get('/api/cargos/:id', CargoController.show);
app.put('/api/cargos/:id', CargoController.update);
app.delete('/api/cargos/:id', CargoController.remove);

// ------------------ FUNCIONARIO ------------------
app.post('/api/funcionarios', FuncionarioController.create);
app.get('/api/funcionarios', FuncionarioController.index);
app.get('/api/funcionarios/:id', FuncionarioController.show);
app.put('/api/funcionarios/:id', FuncionarioController.update);
app.delete('/api/funcionarios/:id', FuncionarioController.remove);

// ------------------ PROJETO ------------------
app.post('/api/projetos', ProjetoController.create);
app.get('/api/projetos', ProjetoController.index);
app.get('/api/projetos/:id', ProjetoController.show);
app.put('/api/projetos/:id', ProjetoController.update);
app.delete('/api/projetos/:id', ProjetoController.remove);

// ------------------ TAREFA ------------------
app.post('/api/tarefas', TarefaController.create);
app.get('/api/tarefas', TarefaController.index);
app.get('/api/tarefas/:id', TarefaController.show);
app.put('/api/tarefas/:id', TarefaController.update);
app.delete('/api/tarefas/:id', TarefaController.remove);

// Inicia servidor
const serverPort = PORT || 3000;
app.listen(serverPort, () => console.log(`🚀 Servidor rodando em http://localhost:3000`));
