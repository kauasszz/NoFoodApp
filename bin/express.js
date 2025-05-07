const express = require('express');
const bodyParser = require('body-parser');

//routers
const categoriaRouter = require('../routes/categoria-router');

const app = express();

//Configuração de parse do JSON

//Configurando as rotas
app.use('/api/categoria', categoriaRouter);

app.use(bodyParser.json);
app.use(bodyParser.urlencoded({ extended: false }));

//Exportando nossa Api
module.exports = app;