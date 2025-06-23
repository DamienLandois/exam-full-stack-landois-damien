const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');

//GET /users/:id
router.get('/:id', UserController.getUserById);

//POST /users
router.post('/', UserController.createUser);

//PUT /users/:id
router.put('/:id', UserController.updateUser);

//GET /users/:id/orders
router.get('/:id/orders', UserController.getUserOrders);

module.exports = router;
