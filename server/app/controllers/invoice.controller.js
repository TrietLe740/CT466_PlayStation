const InvoiceService = require("../services/invoice.service");
const MongoDB = require("../utils/mongodb.util");
const ApiError = require("../api-error");

exports.create = async (req, res, next) => {
  if (!req.body?.payload) {
    return next(new ApiError(400, "Name can not be empty !"));
  }
  console.log(req.body.payload);

  try {
    const invoiceService = new InvoiceService(MongoDB.client);
    const document = await invoiceService.create(req.body.payload);
    return res.send(document);
  } catch (error) {
    console.log(error);
    return next(
      new ApiError(500, `An error occurrend while creating the product`)
    );
  }
};
