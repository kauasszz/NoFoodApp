require('../models/produto-model');
const mongoose = require('mongoose');
const produtoModel = mongoose.model('Produto');

class produtoRepository {
    
    constructor() {
     
    }

    async create(data) {
        let categoria = new produtoModel(data);
        let resultado = await categoria.save();

        return resultado;
    }

    async update(id, data) {
        await produtoModel.findByIdAndUpdate(id, { $set: data });
        let resultado = await produtoModel.findById(id);

        return resultado
    }

    async getAll() {
        let lista = await produtoModel.find();

        return lista;
    }

    async getById(id) {
        let categoriaEncontrada = await produtoModel.findById(id);

        return categoriaEncontrada;
    }

    async delete(id) {
        let categoriaDeletada = await produtoModel.findByIdAndRemove(id);
        
        return categoriaDeletada;
    }
}   

module.exports = produtoRepository;