const { ObjectId } = require("mongodb");

class AccessoryService {
  constructor(client) {
    this.Accessory = client.db().collection("accessory");
  }

  extractAccessoryData(payload) {
    const accessory = {
      name: payload.name,
      price: payload.price,
      sale: payload.sale,
      type: payload.type,
      img: payload.img,
      more: payload.more,
    };

    Object.keys(accessory).forEach(
      (key) => accessory[key] === undefined && delete accessory[key]
    );
    return accessory;
  }

  async create(payload) {
    const accessory = this.extractAccessoryData(payload);
    const result = await this.Accessory.findOneAndUpdate(
      accessory,
      { $set: {} },
      { returnDocument: "after", upsert: true }
    );
    return result.value;
  }

  async find(filter) {
    return new Promise(async (resolve, reject) => {
      try {
        const cursor = await this.Accessory.find();
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

  async findById(id) {
    return await this.Accessory.findOne({
      _id: ObjectId.isValid(id) ? new ObjectId(id) : null,
    });
  }

  async update(id, payload) {
    const accessory = this.extractAccessoryData(payload);
    const result = await this.Accessory.findOneAndUpdate(
      {
        _id: ObjectId.isValid(id) ? new ObjectId(id) : null,
      },
      { $set: accessory },
      { returnDocument: "after" }
    ); //
    return result.value;
  }
}

module.exports = AccessoryService;
