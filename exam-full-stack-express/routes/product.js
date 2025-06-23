const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/productController');

//GET products
router.get('/', ProductController.getAllProducts);

//GET products/:id
router.get('/:id', ProductController.getProductById);

//POST products
router.post('/', ProductController.createProduct);

module.exports = router;
