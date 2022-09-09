'use strict';

const Usuario = require('../models/usuarios');

function inicio(req, res) {
    res.status(200).send({
        nome: 'Beatriz Mattos',
        idade: '18',
        apelido: 'Biah',
    });
}

function teste(req, res) {
    res.status(200).send({
        message: 'Testando rotas',
    });
}

module.exports = {
    inicio,
    teste
}