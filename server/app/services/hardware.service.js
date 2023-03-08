const { ObjectId } = require("mongodb");

class HardwareService {
  constructor(client) {
    this.Hardware = client.db().collection("hardware");
  }

  extractHardwareData(payload) {
    const hardware = {
      name: payload.name,
      price: payload.price,
      sale: payload.sale,
      type: payload.type,
      img: payload.img,
      more: payload.more,
    };

    Object.keys(hardware).forEach(
      (key) => hardware[key] === undefined && delete hardware[key]
    );
    return hardware;
  }

  async create(payload) {
    const hardware = this.extractHardwareData(payload);
    const result = await this.Hardware.findOneAndUpdate(
      hardware,
      { $set: {} },
      { returnDocument: "after", upsert: true }
    );
    return result.value;
  }

  async find(filter) {
    return new Promise(async (resolve, reject) => {
      try {
        const cursor = await this.Hardware.find();
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
    return await this.Hardware.findOne({
      _id: ObjectId.isValid(id) ? new ObjectId(id) : null,
    });
  }
}

module.exports = HardwareService;
