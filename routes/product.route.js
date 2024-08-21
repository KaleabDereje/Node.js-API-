const express = require('express');
const router = express.Router();
const {getProducts, getProduct} = require('../controllers/product.controller');

router.get('/', getProducts);
router.get('/:id', getProduct);