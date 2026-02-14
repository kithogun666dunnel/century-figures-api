const express = require("express");
const figuresRoutes = require("./routes/figures.routes");
const errorHandler = require("./middleware/errorHandler");
const logger = require("./middleware/logger");
const AppError = require("./utils/AppError");
const helmet = require("helmet");
const cors = require("cors");
const rateLimit = require("express-rate-limit");
const rateLimit = require("express-rate-limit");

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // 100 requests per IP
  message: {
    status: "error",
    message: "Too many requests, please try again later",
  },
});

app.use("/api", limiter);
// must be last
const app = express();

// built-in middleware
app.use(express.json());
app.use(helmet());

app.use(logger);
app.use(cors());
app.use("/api", limiter);

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
