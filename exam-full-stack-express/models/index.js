import sequelize from '../config/db.js';
import User from './userModel.js';
import Product from './productModel.js';
import Order from './orderModel.js';

/*
* Relation User - Order
*/
User.hasMany(Order, {
    foreignKey: 'userId',
    as: 'orders',
});

Order.belongsTo(User, {
    foreignKey: 'userId',
    as: 'user'
});

/*
* Relation Order - Product
*/
Order.belongsToMany(Product, {
    through: 'OrderItem',
    foreignKey: 'orderId',
    as: 'products'
});

Product.belongsToMany(Order, {
    through: 'OrderItem',
    foreignKey: 'productId',
    as: 'orders'
});

export {
  sequelize,
  User,
  Product,
  Order,
};