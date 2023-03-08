const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const hardwareRouter = require("./app/routers/route");

const ApiError = require("./app/api-error");

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("combined"));
app.use("/api/hardwares", hardwareRouter);

app.get("/", (req, res) => {
  res.json({ msg: "Welcome to my app." });
});

// 404
app.use((req, res, next) => {
  return next(new ApiError(404, "Resource not found"));
});

// 5xx
app.use((err, req, res, next) => {
  return res.status(err.statusCode || 500).json({
    message: err.message || "Internal Server Error",
  });
});

module.exports = app;
