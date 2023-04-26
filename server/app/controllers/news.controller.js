const NewsService = require("../services/news.service");
const MongoDB = require("../utils/mongodb.util");
const ApiError = require("../api-error");

exports.create = async (req, res, next) => {
  if (!req.body?.title) return next(new ApiError(400, `Title can't be empty!`));

  try {
    const newService = new NewsService(MongoDB.client);
    const document = await newService.create(req.body);
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
    const newService = new NewsService(MongoDB.client);
    const name = req.query;
    if (name) {
      documents = await newService.findByName(name);
    } else {
      documents = await newService.find();
    }
  } catch (error) {
    console.log(error);
    return next(
      new ApiError(500, "An error occured while retrieving hardware")
    );
  }
  return res.send(documents);
};

exports.findOne = async (req, res, next) => {
  try {
    const newService = new NewsService(MongoDB.client);
    const document = await newService.findById(req.params.id);
    if (!document) {
      return next(new ApiError(404, "New not found"));
    }
    return res.send(document);
  } catch (error) {
    return next(
      new ApiError(500, `Error retrieving product with id=${req.params.id}`)
    );
  }
};

exports.update = async (req, res, next) => {
  console.log(req.body);
  if (Object.keys(req.body).length === 0) {
    return next(new ApiError(400, "Data to update can not be empty"));
  }

  try {
    const newService = new NewsService(MongoDB.client);
    const document = await newService.update(req.params.id, req.body);
    if (!document) {
      return next(new ApiError(404, "New not found"));
    }
    return res.send({ message: "New was updated succesfully" });
  } catch (error) {
    console.log(error);
    return next(
      new ApiError(500, `Error updating product with id=${req.params.id}`)
    );
  }
};

exports.delete = async (req, res, next) => {
  try {
    const newService = new NewsService(MongoDB.client);
    const document = await newService.delete(req.params.id);
    if (!document) {
      return next(new ApiError(404, "New not found"));
    }
    return res.send({ message: "New was deleted succesfully " });
  } catch (error) {
    return next(
      new ApiError(500, `Could not delete product with id=${req.params.id}`)
    );
  }
};
