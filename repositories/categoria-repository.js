require('../models/categoria-model');
const mongoose = require('mongoose');
const categoriaModel = mongoose.model('Categoria');

class CategoriaRepository {
    
    constructor() {
     
    }

    async create(data) {
        let categoria = new categoriaModel(data);
        let resultado = await categoria.save();

        return resultado;
    }

    async update(id, data) {
        await categoriaModel.findByIdAndUpdate(id, { $set: data });
        let resultado = await categoriaModel.findById(id);

        return resultado
    }

    async getAll() {
        let lista = await categoriaModel.find();

        return lista;
    }

    async getById(id) {
        let categoriaEncontrada = await categoriaModel.findById(id);

        return categoriaEncontrada;
    }

    async delete(id) {
        let categoriaDeletada = await categoriaModel.findByIdAndRemove(id);
        
        return categoriaDeletada;
    }
}   

module.exports = CategoriaRepository;