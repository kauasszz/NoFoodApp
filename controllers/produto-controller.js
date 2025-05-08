'use strict'
require('../models/produto-model')
const moongose = require('mongoose');
const produto = moongose.model('Produto');

function produtoController() {

}

produtoController.prototype.post = async (req, res) => {};

produtoController.prototype.put = async (req, res) => {};

produtoController.prototype.get = async (req, res) => {   
     res.status(200).send('Funcionando')
};

produtoController.prototype.getById = async (req, res) => {};

produtoController.prototype.delete = async (req, res) => {};

module.exports = produtoController;