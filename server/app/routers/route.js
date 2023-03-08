const express = require("express");
const hardwares = require("../controllers/hardware.controller");

const router = express.Router();

router
  .route("/")
  .get(hardwares.findAll)
  .post(hardwares.create)
  .delete(hardwares.delete);

router
  .route("/:id")
  .get(hardwares.findOne)
  .put(hardwares.update)
  .delete(hardwares.delete);

module.exports = router;
