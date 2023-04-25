const GamesService = require("../services/games.service");
const MongoDB = require("../utils/mongodb.util");
const ApiError = require("../api-error");

exports.create = async (req, res, next) => {
  if (!req.body?.name) return next(new ApiError(400, `Name can't be empty!`));

  try {
    const gameService = new GamesService(MongoDB.client);
    const document = await gameService.create(req.body);
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
    const gameService = new GamesService(MongoDB.client);
    const name = req.query;
    if (name) {
      documents = await gameService.findByName(name);
    } else {
      documents = await gameService.find();
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
    const gameService = new GamesService(MongoDB.client);
    const document = await gameService.findById(req.params.id);
    if (!document) {
      return next(new ApiError(404, "Product not found"));
    }
    return res.send(document);
  } catch (error) {
    return next(
      new ApiError(500, `Error retrieving product with id=${req.params.id}`)
    );
  }
};

exports.update = async (req, res, next) => {
  if (Object.keys(req.body).length === 0) {
    return next(new ApiError(400, "Data to update can not be empty"));
  }

  try {
    const gameService = new GamesService(MongoDB.client);
    const document = await gameService.update(req.params.id, req.body);
    if (!document) {
      return next(new ApiError(404, "Product not found"));
    }
    return res.send({ message: "Product was updated succesfully" });
  } catch (error) {
    return next(
      new ApiError(500, `Error updating product with id=${req.params.id}`)
    );
  }
};

exports.delete = async (req, res, next) => {
  try {
    const gameService = new GamesService(MongoDB.client);
    const document = await gameService.delete(req.params.id);
    if (!document) {
      return next(new ApiError(404, "Product not found"));
    }
    return res.send({ message: "Product was deleted succesfully " });
  } catch (error) {
    return next(
      new ApiError(500, `Could not delete product with id=${req.params.id}`)
    );
  }
};
