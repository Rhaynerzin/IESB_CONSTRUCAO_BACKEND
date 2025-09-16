const express = require('express')
const app = express()

// Intermediários
const cors = require('cors')
// habilitar o browser para mandar uma requisição
app.use(cors()) 
// habilita receber json como corpo da requisição
app.use(express.json())

app.use((req, res, next) => {
    console.log("#### LOG de Recuperação ###")
    console.log("TIME: ", new Date().toLocaleString())
    console.log("METODO: ", req.method)
    console.log("NOTA ", req.url)
    next()
})

// Roteadores
const PessoaController = require("./routes/PessoaController")
app.use(PessoaController)

// executa
app.listen(3000, () => {
    console.log("Api rodando em http://localhost:3000")
})