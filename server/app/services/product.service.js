const { ObjectId } = require("mongodb");

class ProductService {
  constructor(client) {
    this.Product = client.db().collection("products");
  }

  extractProductData(payload) {
    const product = {
      name: payload.name,
      price: payload.price,
      sale: payload.sale,
      more: payload.more,
    };

    Object.keys(product).forEach(
      (key) => product[key] === undefined && delete product[key]
    );
    return product;
  }

  async create(payload) {
    const product = this.extractProductData(payload);
    const result = await this.Product.findOneAndUpdate(
      product,
      { $set: {} },
      { returnDocument: "after", upsert: true }
    );
    return result.value;
  }

  async find(filter) {
    const cursor = await this.Product.find(filter);
    return await cursor.toArray();
  }

  async findByName(name) {
    return await this.find({
      name: { $regex: new RegExp(name), $options: "i" },
    });
  }
}

module.exports = ProductService;
