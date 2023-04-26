const { ObjectId } = require("mongodb");

class HardwareService {
  constructor(client) {
    this.Hardware = client.db().collection("hardware");
  }

  extractHardwareData(payload) {
    const hardware = {
      name: payload.name,
      price: parseInt(payload.price) || 0,
      sale: parseInt(payload.sale) || 0,
      type: payload.type || "hardware",
      img: payload.img,
      more: payload.more || {},
      description: payload.description,
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
    console.log(name);
    const cursor = await this.Hardware.find({
      name: { $regex: new RegExp(name), $options: "i" },
    });
    return await cursor.toArray();
  }

  async findById(id) {
    return await this.Hardware.findOne({
      _id: ObjectId.isValid(id) ? new ObjectId(id) : null,
    });
  }

  async update(id, payload) {
    const hardware = this.extractHardwareData(payload);
    const result = await this.Hardware.findOneAndUpdate(
      {
        _id: ObjectId.isValid(id) ? new ObjectId(id) : null,
      },
      {
        $set: hardware,
      },
      { returnDocument: "after" }
    ); //
    return result.value;
  }

  async delete(id) {
    const result = await this.Hardware.findOneAndDelete({
      _id: ObjectId.isValid(id) ? new ObjectId(id) : null,
    });
    return result.value;
  }
}

module.exports = HardwareService;
