import {Order} from '../models/index.js';

class OrderRepository {
  async findById(id, options = {}) {
    return await Order.findByPk(id, options);
  }

  async createOrder(data, options = {}) {
    return await Order.create(data, options);
  }

  async updateOrder(order, data, options = {}) {
    return await order.update(data, options);
  }

  async findAllByUserId(userId, options = {}) {
    return await Order.findAll({
      where: { userId },
      ...options
    });
  }
}

export default new OrderRepository();
