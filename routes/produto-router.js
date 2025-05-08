'use strict'

const express = require('express');
const router = express.Router();
const produtoController = require('../controllers/produto-controller')

let _produto = new produtoController();

router.get('/', _produto.get);

router.get('/:id', _produto.getById);

router.post('/', _produto.post);

router.put('/:id', _produto.put);

router.delete('/:id', _produto.delete)

module.exports = router;