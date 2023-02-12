const ProductService = require("../services/product.service");
const MongoDB = require("../utils/mongodb.util");
const ApiError = require("../api-error");

// Định nghĩa product controller
exports.create = async (req, res, next) => {
  if (!req.body?.name) return next(new ApiError(400, `Name can't be empty!`));

  try {
    const productService = new ProductService(MongoDB.client);
    const document = await productService.create(req.body);
    return res.send(document);
  } catch (error) {
    return next(
      new ApiError(500, `An error occurrend while creating the product`)
    );
  }
};

exports.findAll = async (req, res, next) => {
  let documents = [];

  try {
    const productService = new ProductService(MongoDB.client);
    const { name } = req.query;
    if (name) {
      documents = await productService.findByName(name);
    } else {
      documents = await productService.find();
    }
  } catch (error) {
    return next(
      new ApiError(500, "An error occured while retrieving products")
    );
  }
  return res.send(documents);
};

exports.findOne = (req, res) => {
  res.send({ msg: "findOne handler" });
};

exports.update = (req, res) => {
  res.send({ msg: "update handler" });
};

exports.delete = (req, res) => {
  res.send({ msg: "delete handler" });
};

exports.deleteAll = (req, res) => {
  res.send({ msg: "deleteAll handler" });
};
