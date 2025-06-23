const express = require('express');
const router = express.Router();
const OrderController = require('../controllers/orderController');

// GET /orders
router.get('/ord', OrderController.getAllOrders);

// GET /orders/:id
router.get('/:id', OrderController.getOrderById);

// GET /orders/user/:id
router.get('/user/:id', OrderController.getOrdersByUserId);

module.exports = router;