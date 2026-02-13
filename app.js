const express = require("express");
const figuresRoutes = require("./routes/figures.routes");

const app = express();

// built-in middleware
app.use(express.json());

// routes
app.get("/", (req, res) => {
  res.send("Root working");
});
app.use("/figures", figuresRoutes);
// export app (IMPORTANT)
module.exports = app;
