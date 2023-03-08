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
    const cursor = await this.Hardware.find(filter);
    return await cursor.toArray();
  }

  async findByName(name) {
    return await this.find({
      name: { $regex: new RegExp(name), $options: "i" },
    });
  }
}

module.exports = HardwareService;
