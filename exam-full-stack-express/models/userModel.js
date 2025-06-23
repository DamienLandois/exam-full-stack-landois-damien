import { Model, DataTypes} from 'sequelize';
import sequelize from '../config/db.js';

class User extends Model {}

User.init(
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: { type: DataTypes.STRING, unique: true },
    password: DataTypes.STRING,
    address: DataTypes.STRING,
    phone: DataTypes.STRING
  },
  {
    sequelize,
    modelName: 'User',
    tableName: 'users',
    charset: 'utf8mb4',
    collate: 'utf8mb4_unicode_ci',
    timestamps: false,
  }
);

export default User;