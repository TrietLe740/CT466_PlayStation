const { ObjectId } = require("mongodb");

class AuthService {
  constructor(client) {
    this.User = client.db().collection("user");
  }

  extractUsersData(payload) {
    const user = {
      name: payload.name,
      email: payload.email,
      password: payload.password,
    };

    Object.keys(user).forEach(
      (key) => user[key] === undefined && delete user[key]
    );
    return user;
  }

  async register(payload) {
    const user = this.extractUsersData(payload);
    console.log(user);
    const result = await this.User.findOneAndUpdate(
      user,
      { $set: {} },
      { returnDocument: "after", upsert: true }
    );
    return result.value;
  }

  async find(filter) {
    return new Promise(async (resolve, reject) => {
      try {
        const cursor = await this.User.find();
        resolve(await cursor.toArray());
      } catch (error) {
        reject(null);
      }
    });
  }

  async findByName(name) {
    return await this.find({
      name: { $regex: new RegExp(name), $options: "i" },
    });
  }

  async findByEmail(email) {
    console.log(email);
    return await (
      await this.User.find({
        // email: { $regex: new RegExp(email), $options: "i" },
        email,
      })
    ).toArray();
  }

  async findById(id) {
    return await this.User.findOne({
      _id: ObjectId.isValid(id) ? new ObjectId(id) : null,
    });
  }

  async update(id, payload) {
    const user = this.extractUsersData(payload);
    const result = await this.User.findOneAndUpdate(
      {
        _id: ObjectId.isValid(id) ? new ObjectId(id) : null,
      },
      { $set: user },
      { returnDocument: "after" }
    );
    return result.value;
  }
}

module.exports = AuthService;
