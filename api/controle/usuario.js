'use strict';

const Usuario = require('../modelos/usuarios');

function inicio(req, res) {
    res.status(200).send({
        nome: 'Luan Gustavo',
        idade: '18',
        apelido: '...',
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