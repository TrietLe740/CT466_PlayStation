const express = require("express");
const hardwares = require("../controllers/hardware.controller");
const games = require("../controllers/games.controller");
const invoice = require("../controllers/invoice.controller");
const auth = require("../controllers/auth.controller");

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

router.route("/invoices").get(invoice.findAll).post(invoice.create);

router
  .route("/invoices/:id")
  .get(invoice.findOne)
  .put(invoice.update)
  .delete(invoice.delete);

router.post("/user/login", auth.login);

router.post("/user/adminLogin", auth.adminLogin);

router.post("/user/register", auth.register);

router.get("/user/findAllUser", auth.findAll);

module.exports = router;
