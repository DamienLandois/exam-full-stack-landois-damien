import {User} from '../models/index.js';


class UserRepository {
  async findById(id, options = {}) {
    return await User.findByPk(id, options);
  }

  async createUser(data, options = {}) {
    return await User.create(data, options);
  }

  async updateUser(user, data, options = {}) {
    return await user.update(data, options);
  }
}

export default new UserRepository();