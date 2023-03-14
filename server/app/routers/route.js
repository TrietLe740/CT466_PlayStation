const express = require("express");
const hardwares = require("../controllers/hardware.controller");
const games = require("../controllers/games.controller");

const router = express.Router();

router
  .route("/hardwares")
  .get(hardwares.findAll)
  .post(hardwares.create)
  .delete(hardwares.delete);

router
  .route("/hardwares/:id")
  .get(hardwares.findOne)
  .put(hardwares.update)
  .delete(hardwares.delete);

router
  .route("/games")
  .get(games.findAll)
  .post(games.create)
  .delete(games.delete);

router
  .route("/games/:id")
  .get(games.findOne)
  .put(games.update)
  .delete(games.delete);

module.exports = router;
