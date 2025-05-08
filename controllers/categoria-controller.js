'use strict'
require('../models/categoria-model')
const moongose = require('mongoose');
const categoria = moongose.model('Categoria');
function categoriaController() {

}

categoriaController.prototype.post = async (req, res) => {
     let novaCategoria = new categoria(req.body)
     let resultado = await novaCategoria.save();

     if (resultado) {
         return res.status(201).send({ message: 'Categoria cadastrada com sucesso!' });
     }
};

categoriaController.prototype.put = async (req, res) => {
    await categoria.findByIdAndUpdate(req.params.id, { $set: req.body });

    let categoriaEncontrada = await categoria.findById(req.params.id);

    if (categoriaEncontrada) {
     return res.status(202).send({ message: 'Categoria encontrada!' });
 }
};

categoriaController.prototype.get = async (req, res) => {   
     let lista = await categoria.find();

     if (lista) {
         return res.status(200).send(lista);
     }
};

categoriaController.prototype.getById = async (req, res) => {
     let categoriaEncontrada = await categoria.findById(req.params.id);
           
     if (categoriaEncontrada) {
         return res.status(200).send(categoriaEncontrada);
     }
};

categoriaController.prototype.delete = async (req, res) => {
     let categoriaDeletada = await categoria.findByIdAndRemove(req.params.id);

     if (categoriaDeletada) {
          return res.status(200).send(categoriaDeletada);
     }
     
};

module.exports = categoriaController;