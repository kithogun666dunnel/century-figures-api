const express = require("express");
const figuresRoutes = require("./routes/figures.routes");
const errorHandler = require("./middleware/errorHandler");
const logger = require("./middleware/logger");
const AppError = require("./utils/AppError");
const helmet = require("helmet");
const cors = require("cors");
const rateLimit = require("express-rate-limit");

const app = express();

// 🔐 Security middlewares
app.use(helmet());
app.use(cors());

// 🚦 Rate Limiter
const limiter = rateLimit({
  windowMs: 60000,
  max: 100,
  message: {
    status: "error",
    message: "Too many requests, please try again later",
  },
});

app.use("/api", limiter);

// 🧠 Built-in middleware
app.use(express.json());
app.use(logger);

// Routes
app.get("/", (req, res) => {
  res.send("Century Figures API v1 running");
});

app.use("/api/v1/figures", figuresRoutes);

// 404
app.all("*", (req, res, next) => {
  next(new AppError(`Cannot find ${req.originalUrl}`, 404));
});

// Error handler
app.use(errorHandler);

module.exports = app;
