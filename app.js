const express = require("express");
const figuresRoutes = require("./routes/figures.routes");
const errorHandler = require("./middleware/errorHandler");
const logger = require("./middleware/logger");
const AppError = require("./utils/AppError");

// must be last
const app = express();

// built-in middleware
app.use(express.json());

app.use(logger);

// routes

app.get("/", (req, res) => {
  res.send("Century Figures API v1 running");
});
app.use("/api/v1/figures", figuresRoutes);

app.all("*", (req, res, next) => {
  next(new AppError(`Cannot find ${req.originalUrl}`, 404));
});

//--> errror handling middleware (must be last)
app.use(errorHandler);

// export app (IMPORTANT)
module.exports = app;
