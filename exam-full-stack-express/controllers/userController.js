const {UserRepository} = require('../repositories/userRepository');
const {OrderRepository} = require('../repositories/orderRepository');

class UserController {
    //GET user/id
    async getUserById(req, res) {
        const userId = req.params.id;
        try {
            const user = await UserRepository.findById(userId);
            if (!user) {
                return res.status(404).json({message: 'User not found'});
            }
            res.json(user);
        } catch (error) {
            res.status(500).json({message: 'Error retrieving user', error});
        }
    }

    //GET user/orders
    async getUserOrders(req, res) {
        const userId = req.params.id;
        try {
            const orders = await OrderRepository.findByUserId(userId);
            if (!orders || orders.length === 0) {
                return res.status(404).json({message: 'No orders found for this user'});
            }
            res.json(orders);
        } catch (error) {
            res.status(500).json({message: 'Error retrieving orders', error});
        }
    }

    //PUT user/id
    async updateUser(req, res) {
        const userId = req.params.id;
        const userData = req.body;
        try {
            const user = await UserRepository.findById(userId);
            if (!user) {
                return res.status(404).json({message: 'User not found'});
            }
            const updatedUser = await UserRepository.updateUser(user, userData);
            res.json(updatedUser);
        } catch (error) {
            res.status(500).json({message: 'Error updating user', error});
        }
    }

    //POST user
    async createUser(req, res) {
        const userData = req.body;
        try {
            const newUser = await UserRepository.createUser(userData);
            res.status(201).json(newUser);
        } catch (error) {
            res.status(500).json({message: 'Error creating user', error});
        }
    }
}

module.exports = new UserController();