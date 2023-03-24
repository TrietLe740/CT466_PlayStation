const { ObjectId } = require("mongodb");

class InvoiceService {
  constructor(client) {
    this.Invoice = client.db().collection("invoice");
  }

  extractInvoiceData(payload) {
    const invoice = {
      cardItems: payload.cardItems,
      totalAmount: payload.totalAmount,
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
      return result.value;
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = InvoiceService;
