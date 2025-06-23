const {OrderRepository} = require('../repositories/orderRepository');

class ProductController {
    //GET orders
    async getAllOrders(req, res) {
        try {
            const orders = await OrderRepository.findAll();
            res.json(orders);
        } catch (error) {
            res.status(500).json({message: 'Error retrieving orders', error});
        }
    }

    //GET orders/id
    async getOrderById(req, res) {
        const orderId = req.params.id;
        try {
            const order = await OrderRepository.findById(orderId);
            if (!order) {
                return res.status(404).json({message: 'Order not found'});
            }
            res.json(order);
        } catch (error) {
            res.status(500).json({message: 'Error retrieving order', error});
        }
    }

    //GET orders/user/id
    async getOrdersByUserId(req, res) {
        const userId = req.params.id;
        try {
            const orders = await OrderRepository.findAllByUserId(userId);
            if (!orders || orders.length === 0) {
                return res.status(404).json({message: 'No orders found for this user'});
            }
            res.json(orders);
        } catch (error) {
            res.status(500).json({message: 'Error retrieving orders', error});
        }
    }
}

module.exports = new ProductController();