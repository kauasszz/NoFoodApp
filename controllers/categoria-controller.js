'use strict'
require('../models/categoria-model')
const moongose = require('mongoose');
const categoria = moongose.model('Categoria');
const repository = require('../repositories/categoria-repository');
function categoriaController() {

}

categoriaController.prototype.post = async (req, res) => {
     let novaCategoria = new categoria(req.body)
     let resultado = await new repository().create(novaCategoria);

     if (resultado) {
         return res.status(201).send({ message: 'Categoria cadastrada com sucesso!' });
     }
};

categoriaController.prototype.put = async (req, res) => {
    let resultado =  await new repository().update(req.params.id, req.body);

    if (resultado) {
     return res.status(202).send({ message: 'Categoria encontrada!' });
 }
};

categoriaController.prototype.get = async (req, res) => {   
     let lista = await new repository().getAll();

     if (lista) {
         return res.status(200).send(lista);
     }
};

categoriaController.prototype.getById = async (req, res) => {
     let categoriaEncontrada = await new repository().getById(req.params.id);
           
     if (categoriaEncontrada) {
         return res.status(200).send(categoriaEncontrada);
     }
};

categoriaController.prototype.delete = async (req, res) => {
     let categoriaDeletada = await new repository().delete(req.params.id);

     if (categoriaDeletada) {
          return res.status(204).send(categoriaDeletada);
     }
     
};

module.exports = categoriaController;