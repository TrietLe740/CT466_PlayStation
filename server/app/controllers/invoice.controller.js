const InvoiceService = require("../services/invoice.service");
const MongoDB = require("../utils/mongodb.util");
const ApiError = require("../api-error");

exports.create = async (req, res, next) => {
  console.log(req.body);
  if (!req.body) {
    return next(new ApiError(400, "Invoice can not be empty !"));
  }

  try {
    const invoiceService = new InvoiceService(MongoDB.client);
    const document = await invoiceService.create(req.body);
    console.log(document);
    return res.json(document);
  } catch (error) {
    console.log(error);
    return next(
      new ApiError(500, `An error occurrend while creating the invoice`)
    );
  }
};

exports.findAll = async (req, res, next) => {
  let documents = [];
  try {
    const invoiceService = new InvoiceService(MongoDB.client);
    const name = req.query;
    if (name) {
      documents = await invoiceService.findByName(name);
    } else {
      documents = await invoiceService.find();
    }
  } catch (error) {
    console.log(error);
    return next(new ApiError(500, "An error occured while retrieving invoice"));
  }
  return res.send(documents);
};

exports.findOne = async (req, res, next) => {
  try {
    const invoiceService = new InvoiceService(MongoDB.client);
    const document = await invoiceService.findById(req.params.id);
    if (!document) {
      return next(new ApiError(404, "Invoice not found"));
    }
    return res.send(document);
  } catch (error) {
    return next(
      new ApiError(500, `Error retrieving invoice with id=${req.params.id}`)
    );
  }
};

exports.delete = async (req, res, next) => {
  try {
    const invoiceService = new InvoiceService(MongoDB.client);
    const document = await invoiceService.delete(req.params.id);
    if (!document) {
      return next(new ApiError(404, "Invoice not found"));
    }
    return res.send({ message: "Invoice was deleted succesfully " });
  } catch (error) {
    return next(
      new ApiError(500, `Could not delete invoice with id=${req.params.id}`)
    );
  }
};

exports.update = async (req, res, next) => {
  console.log(req.body);
  if (Object.keys(req.body).length === 0) {
    return next(new ApiError(400, "Data to update can not be empty"));
  }

  try {
    const invoiceService = new InvoiceService(MongoDB.client);
    const document = await invoiceService.update(req.params.id, req.body);
    if (!document) {
      return next(new ApiError(404, "Invoice not found"));
    }
    return res.send({ message: "Invoice was updated succesfully" });
  } catch (error) {
    console.log(error);
    return next(
      new ApiError(500, `Error updating invoice with id=${req.params.id}`)
    );
  }
};
