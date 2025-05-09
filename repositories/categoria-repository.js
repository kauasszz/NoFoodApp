require('../models/categoria-model');
const mongoose = require('mongoose');
const repository = require('../repositories/categoria-repository');
const categoriaModel = mongoose.model('Categoria');

class CategoriaRepository {
    
    constructor() {
     
    }

    async create(data) {
        let categoria = new categoriaModel
    }
}   

module.exports = CategoriaRepository