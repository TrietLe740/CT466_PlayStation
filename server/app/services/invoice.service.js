const { ObjectId } = require("mongodb");

class InvoiceService {
  constructor(client) {
    this.Invoice = client.db().collection("invoice");
  }

  extractInvoiceData(payload) {
    const invoice = {
      user_id: payload.user_id,
      name: payload.name,
      email: payload.email,
      cartItems: payload.cartItems.length ? payload.cartItems : [],
      totalAmount: payload.totalAmount,
      status: payload.status || "To Pay",
    };

    Object.keys(invoice).forEach(
      (key) => invoice[key] === undefined && delete invoice[key]
    );
    return invoice;
  }

  async create(payload) {
    const invoice = this.extractInvoiceData(payload);
    try {
      const result = await this.Invoice.insertOne(invoice);
      return result;
    } catch (error) {
      console.log(error);
    }
  }

  async find(filter) {
    return new Promise(async (resolve, reject) => {
      try {
        const cursor = await this.Invoice.find();
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
    return await this.Invoice.findOne({
      _id: ObjectId.isValid(id) ? new ObjectId(id) : null,
    });
  }

  async update(id, payload) {
    const invoice = this.extractInvoiceData(payload);
    const result = await this.Invoice.findOneAndUpdate(
      {
        _id: ObjectId.isValid(id) ? new ObjectId(id) : null,
      },
      { $set: invoice },
      { returnDocument: "after" }
    );
    return result.value;
  }

  async delete(id) {
    const result = await this.Invoice.findOneAndDelete({
      _id: ObjectId.isValid(id) ? new ObjectId(id) : null,
    });
    return result.value;
  }
}

module.exports = InvoiceService;
