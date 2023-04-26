const MongoDB = require("../utils/mongodb.util");
const ApiError = require("../api-error");
const NewsService = require("../services/news.service");
const HardwaresService = require("../services/hardware.service");
const GamesService = require("../services/games.service");

exports.search = async (req, res, next) => {
  console.log(req.query);
  if (!req.body) {
    return next(new ApiError(400, "Invoice can not be empty !"));
  }

  try {
    const hardwareServ = new HardwaresService(MongoDB.client);
    const hardwareResult = await hardwareServ.findByName(req.query.q);
    const gameServ = new GamesService(MongoDB.client);
    const gameResult = await gameServ.findByName(req.query.q);
    const newServ = new NewsService(MongoDB.client);
    const newResult = await newServ.findByName(req.query.q);

    return res.json({
      hardware: hardwareResult,
      game: gameResult,
      new: newResult,
    });
  } catch (error) {
    console.log(error);
    return next(
      new ApiError(500, `An error occurrend while creating the invoice`)
    );
  }
};
