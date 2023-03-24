const AuthService = require("../services/auth.service");
const MongoDB = require("../utils/mongodb.util");
const ApiError = require("../api-error");

exports.login = async (req, res, next) => {
  if (req.body) {
    try {
      const authService = new AuthService(MongoDB.client);
      const document = await authService.findByEmail(req.body.email);
      console.log(document);
      if (!document.length) {
        return next(new ApiError(404, "User not found"));
      }
      if (document[0].password != req.body.password) {
        return next(new ApiError(403, "Password invalid"));
      }
      return res.status(200).send(document);
    } catch (error) {
      return next(
        new ApiError(500, `Error retrieving user with email=${req.body.email}`)
      );
    }
  }
};

exports.register = async (req, res, next) => {
  if (!req.body) {
    return next(new ApiError(400, "Email can not be empty !"));
  }
  console.log(req.body);

  try {
    const authService = new AuthService(MongoDB.client);
    const checkUser = await authService.findByEmail(req.body.email);
    console.log(checkUser);
    if (checkUser.length) {
      return next(new ApiError(409, "Email already exist!"));
    }
    const document = await authService.register(req.body);
    return res.status(200).send(document);
  } catch (error) {
    console.log(error);
    return next(
      new ApiError(500, `An error occurrend while creating the product`)
    );
  }
};

exports.findAll = async (req, res, next) => {
  let documents = [];
  try {
    const authService = new AuthService(MongoDB.client);
    const name = req.query;
    if (name) {
      documents = await authService.findByName(name);
    } else {
      documents = await authService.find();
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
    const authService = new AuthService(MongoDB.client);
    const document = await authService.findById(req.params.id);
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
