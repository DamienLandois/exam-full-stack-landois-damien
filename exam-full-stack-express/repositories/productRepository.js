import Product from '../models/productModel.js';

export class ProductRepository {
  async findById(id, options = {}) {
    return await Product.findByPk(id, options);
  }

  async createProduct(data, options = {}) {
    return await Product.create(data, options);
  }

  async updateProduct(product, data, options = {}) {
    return await product.update(data, options);
  }

  async findAll(options = {}) {
    return await Product.findAll(options);
  }

  async findAllByOrderId(orderId, options = {}) {
    return await Product.findAll({
      where: { orderId },
      ...options
    });
  }
}