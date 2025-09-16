const express = require("express")
const router = express.Router()

// Mapeamento dos endpoints e a lógica
// Lista de pessoas para simular o banco de dados
let pessoas = [
    {
        id: 1,
        nome: "João Pedro",
        cpf: "12312345678",
        email: "joaopedro@gmail.com",
        dataNascimento: "01/01/2000"
    },
    {
        id: 2,
        nome: "Maria Eduarda",
        cpf: "12312345678",
        email: "mariaed@gmail.com",
        dataNascimento: "02/02/2000"
    }
]

// Criar
// POST /pessoas
router.post("/pessoas", (req, res, next) => {

})

// Listar Todos
// GET /pessoas
router.get('/pessoas', (req, res, next) =>{
    res.json(pessoas)
})

// Buscar um
// GET /pessoas
router.get('/pessoas/:id', (req, res, next) => {
    const idRecebido = req.params.id
    const pessoa = pessoas.find(p => p.id == idRecebido)
    if(!pessoa) {
        return res.status(484).json({ error: "Pessoa não encontrada!!!" })
    }
    res.json(pessoa)
})


// Editar
// PUT /pessoas
router.put('/pessoas/:id', (req, res, next) =>{

})

// Deletar
// DELETE /pessoas
router.delete('/pessoas/:id', (req, res, next) => {

})


module.exports = router