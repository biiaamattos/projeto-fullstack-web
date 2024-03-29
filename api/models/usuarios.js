'use strict'



const mongoose = require('mongoose');
const Esquema = mongoose.Schema;

const UsuarioEsquema = Esquema({
    nome: String,
    sobrenome: String,
    apelido: String,
    email: String,
    senha: String,
    funcao: String,
    imagem: String
});

module.exports = mongoose.model('Usuario', UsuarioEsquema);