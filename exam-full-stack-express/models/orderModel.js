import { Model, DataTypes} from 'sequelize';
import sequelize from '../config/db.js';

class Order extends Model {}

Order.init(
  {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
    },
    total: DataTypes.FLOAT
  },
  {
    sequelize,
    modelName: 'Order',
    tableName: 'orders',
    charset: 'utf8mb4',
    collate: 'utf8mb4_unicode_ci',
    timestamps: true,
  }
);

export default Order;