'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const variables = require('../bin/configuration/variables');

const categoriaRouter = require('../routes/categoria-router');
const produtoRouter = require('../routes/produto-router');

const app = express();
// Configuração de parse do JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Conectando ao MongoDB com Mongoose
mongoose.connect(variables.Database.connection).catch((err) => {
    console.error("Erro na conexão com o MongoDB:", err);
});

// Configurando as rotas
app.use('/api/categoria', categoriaRouter);
app.use('/api/produto', produtoRouter);

module.exports = app;
