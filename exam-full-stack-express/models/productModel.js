import { Model, DataTypes} from 'sequelize';
import sequelize from '../config/db.js';

class Product extends Model {}

Product.init(
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.FLOAT
  },
  {
    sequelize,
    modelName: 'Product',
    tableName: 'products',
    charset: 'utf8mb4',
    collate: 'utf8mb4_unicode_ci',
    timestamps: false,
  }
);

export default Product;